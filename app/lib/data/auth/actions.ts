import { sql } from '@vercel/postgres'

export async function createNewUser(email: string, password: string) {
  // const data = await sql<any>`INSERT INTO users (email, password, date_created)
  //   values(${email}, ${password}, ${Date.now() / 1000})`
}