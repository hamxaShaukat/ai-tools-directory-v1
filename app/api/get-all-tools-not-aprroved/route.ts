import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';

export async function GET() {
  console.log('first')
  try {
    console.log('Fetching tools with pending approval status...');
    const tools = await prisma.tool.findMany({
      where: {
        approved: 'pending',
      },
      include: {
        User: true,
        Reviews: true,
      },
    });
    console.log('second')

    return NextResponse.json(tools);
  } catch (error) {
    console.error('Error fetching tools:', error);
    return NextResponse.json({ error: 'Failed to fetch tools' }, { status: 500 });
  }
}
