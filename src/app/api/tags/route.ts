import db from '@/db';

export async function GET() {
  const raw = await db.query.categories.findMany({
    with: {
      categorySpecialties: {
        with: {
          specialty: true
        }
      }
    }
  });

  const result = raw.map((category) => ({
    id: category.id,
    title: category.title,
    specialties: category.categorySpecialties.map((cs) => ({
      id: cs.specialty.id,
      title: cs.specialty.title
    }))
  }));

  return Response.json(result);
}
