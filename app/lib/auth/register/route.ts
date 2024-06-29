import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
  } catch (e) {
    console.log({e})
  }

  // TODO - better notification of error/success
  return NextResponse.json({message: 'success'})
}