import db from '@/db';
import { advocates, advocateSpecialties } from '@/db/schema';
import { NextRequest } from 'next/server';
import { ilike, gte, lte, inArray, and, or, sql } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Extract search parameters
  const city = searchParams.get('city');
  const minExperience = searchParams.get('minExperience');
  const maxExperience = searchParams.get('maxExperience');
  const specialtyIds = searchParams
    .get('specialties')
    ?.split(',')
    .map(Number)
    .filter(Boolean);
  const degree = searchParams.get('degree');
  const name = searchParams.get('name'); // Search by first or last name

  try {
    // Build where conditions
    const whereConditions = [];

    if (city) {
      whereConditions.push(ilike(advocates.city, `%${city}%`));
    }

    if (minExperience) {
      whereConditions.push(
        gte(advocates.yearsOfExperience, parseInt(minExperience))
      );
    }

    if (maxExperience) {
      whereConditions.push(
        lte(advocates.yearsOfExperience, parseInt(maxExperience))
      );
    }

    if (degree) {
      whereConditions.push(ilike(advocates.degree, `%${degree}%`));
    }

    if (name) {
      whereConditions.push(
        or(
          ilike(advocates.firstName, `%${name}%`),
          ilike(advocates.lastName, `%${name}%`)
        )
      );
    }

    // For specialty filtering, a different approach is needed because of the many-to-many relationship
    let advocatesList;

    if (specialtyIds && specialtyIds.length > 0) {
      const advocatesMatchingAllSpecialties = await db
        .select({
          advocateId: advocateSpecialties.advocate
        })
        .from(advocateSpecialties)
        .where(inArray(advocateSpecialties.specialty, specialtyIds))
        .groupBy(advocateSpecialties.advocate)
        .having(
          sql`COUNT(DISTINCT ${advocateSpecialties.specialty}) = ${specialtyIds.length}`
        );

      const advocateIds = advocatesMatchingAllSpecialties.map(
        (a) => a.advocateId
      );

      if (advocateIds.length === 0) {
        return Response.json([]);
      }

      whereConditions.push(inArray(advocates.id, advocateIds));
    }

    // Apply where conditions if any exist
    if (whereConditions.length > 0) {
      advocatesList = await db.query.advocates.findMany({
        where: and(...whereConditions),
        with: {
          advocateSpecialties: {
            with: {
              specialty: true
            }
          }
        }
      });
    } else {
      advocatesList = await db.query.advocates.findMany({
        with: {
          advocateSpecialties: {
            with: {
              specialty: true
            }
          }
        }
      });
    }

    // Transform to flatten specialties
    const result = advocatesList.map((advocate) => ({
      ...advocate,
      specialties: advocate.advocateSpecialties.map((as) => as.specialty),
      advocateSpecialties: undefined
    }));

    return Response.json(result);
  } catch (error) {
    console.error('Error fetching advocates:', error);
    return Response.json(
      { error: 'Failed to fetch advocates' },
      { status: 500 }
    );
  }
}
