import db from '@/db';
import { categorySpecialties } from '@/db/schema';

export async function GET() {
  const data = await db.select().from(categorySpecialties);
  return Response.json({ data });
}
