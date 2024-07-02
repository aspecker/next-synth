import { PermissionAction, PermissionEntity } from '@/app/lib/enum/permission.enum';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';


 
export async function GET(request: Request) {
  try {
    
    const result = await sql`INSERT INTO permissions(action, entity)
    VALUES (${PermissionAction.VIEW}, ${PermissionEntity.USER}),
    (${PermissionAction.CREATE}, ${PermissionEntity.USER}),
    (${PermissionAction.EDIT}, ${PermissionEntity.USER}),
    (${PermissionAction.DELETE}, ${PermissionEntity.USER}),
    (${PermissionAction.VIEW}, ${PermissionEntity.SONG}),
    (${PermissionAction.CREATE}, ${PermissionEntity.SONG}),
    (${PermissionAction.EDIT}, ${PermissionEntity.SONG}),
    (${PermissionAction.DELETE}, ${PermissionEntity.SONG}),
    (${PermissionAction.VIEW}, ${PermissionEntity.PERMISSION}),
    (${PermissionAction.CREATE}, ${PermissionEntity.PERMISSION}),
    (${PermissionAction.EDIT}, ${PermissionEntity.PERMISSION}),
    (${PermissionAction.DELETE}, ${PermissionEntity.PERMISSION});`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error }, { status: 500 });
  }
}

// 1, 10-13