import { InferSelectModel } from 'drizzle-orm';
import db from '@/db';
import {
  advocates,
  advocateSpecialties,
  specialties,
  categories,
  categorySpecialties
} from '@/db/schema';
import { advocateData } from '@/db/seed/advocates';
import { specialties as specialtyCategories } from '@/db/seed/advocates';

export async function POST() {
  try {
    // 1. Insert categories first
    const categoryRecords = await db
      .insert(categories)
      .values(
        specialtyCategories.map((category) => ({
          title: category.title // Adjust property name as needed
        }))
      )
      .returning();

    // 2. Insert specialties
    const allSpecialties = specialtyCategories.flatMap((category) =>
      category.children.map((specialty) => specialty)
    );

    const specialtyRecords = await db
      .insert(specialties)
      .values(allSpecialties)
      .returning();

    // 3. Create category-to-specialty mappings
    const categorySpecialtyMappings: Array<
      InferSelectModel<typeof categorySpecialties>
    > = [];
    specialtyCategories.forEach((category, categoryIndex) => {
      category.children.forEach(({ title }) => {
        const specialtyRecord = specialtyRecords.find((s) => s.title === title);
        if (specialtyRecord) {
          categorySpecialtyMappings.push({
            category: categoryRecords[categoryIndex].id,
            specialty: specialtyRecord.id
          });
        }
      });
    });

    await db.insert(categorySpecialties).values(categorySpecialtyMappings);

    // 4. Insert advocates
    const advocateRecords = await db
      .insert(advocates)
      .values(advocateData)
      .returning();

    // 5. Create advocate-to-specialty mappings
    const advocateSpecialtyMappings: Array<
      InferSelectModel<typeof advocateSpecialties>
    > = [];

    advocateRecords.forEach((advocate) => {
      // Get 2-4 random specialties for each advocate
      const randomSpecialties = getRandomSpecialties(
        specialtyRecords,
        Math.floor(Math.random() * 3) + 2
      );
      randomSpecialties.forEach((specialty) => {
        advocateSpecialtyMappings.push({
          advocate: advocate.id,
          specialty: specialty.id
        });
      });
    });

    if (advocateSpecialtyMappings.length > 0) {
      await db.insert(advocateSpecialties).values(advocateSpecialtyMappings);
    }

    return Response.json({
      message: 'Database seeded successfully',
      counts: {
        advocates: advocateRecords.length,
        specialties: specialtyRecords.length,
        categories: categoryRecords.length
      }
    });
  } catch (error) {
    console.error('Seeding error:', error);
    return Response.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}

// Helper function to get random specialties for advocates
function getRandomSpecialties(
  specialtyRecords: InferSelectModel<typeof specialties>[],
  count = 3
) {
  const shuffled = [...specialtyRecords].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, specialtyRecords.length));
}
