import db from '@/db';
import { advocateSpecialties } from '@/db/schema';

export async function GET() {
  const data = await db.select().from(advocateSpecialties);
  return Response.json({ data });
}
