import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    // TODO - figure out how to model song data...
    const result =
      await sql`CREATE TABLE songs ( 
        id SERIAL PRIMARY KEY,
        date_created BIGINT,
        last_updated BIGINT
      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}