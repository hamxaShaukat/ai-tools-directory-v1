import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import prisma from '@/lib/prismadb';

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  console.log(session.user.email)
  const user = await prisma.user.findUnique({
    where: { email: session.user?.email as string },
  });
  console.log(user)
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  console.log('i am called here')

  return NextResponse.json(user);
}