import db from '@/db';
import { specialties } from '@/db/schema';

export async function GET() {
  const data = await db.select().from(specialties);
  return Response.json({ data });
}
