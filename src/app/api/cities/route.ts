import db from "../../../db";
import { advocates } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const rawCities = await db
    .selectDistinct({ city: advocates.city })
    .from(advocates);

  // Wrap into objects with `key` and `label` for React Aria
  const cities = rawCities.map(({ city }, key) => ({
    key,
    label: city,
  }));

  return NextResponse.json(cities);
}
