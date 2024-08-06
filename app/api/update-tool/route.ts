import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Not Authenticated" }, { status: 401 });
  }

  const { id, title, logo, bio, url, description, category, price } =
    await request.json();

  // Construct the update data object dynamically
  const data: { [key: string]: string | undefined } = {};
  if (title) data.title = title;
  if (logo) data.logo = logo;
  if (bio) data.bio = bio;
  if (url) data.url = url;
  if (description) data.description = description;
  if (category) data.category = category;
  if (price) data.price = price;

  try {
    const updateTool = await prisma?.tool.update({
      where: { id },
      data,
    });
    console.log(updateTool);
    return NextResponse.json(updateTool);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update tool" }, { status: 500 });
  }
}
