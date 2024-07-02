import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE user_permissions (
      user_id INT NOT NULL,
      permissions_id INT NOT NULL,
      PRIMARY KEY (user_id, permissions_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (permissions_id) REFERENCES permissions(id) ON DELETE CASCADE
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}