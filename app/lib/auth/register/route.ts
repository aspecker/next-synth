import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import { sql } from "@vercel/postgres";

const SALT_ROUNDS = 10

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const hashedPassword = await hash(password, SALT_ROUNDS)

    const response = await sql`
      INSERT INTO users(email, password, date_created)
      VALUES (${email}, ${hashedPassword}, ${Date.now()})
    `
  } catch (e) {
    console.log({e})
  }

  // TODO - better notification of error/success
  return NextResponse.json({message: 'success'})
}