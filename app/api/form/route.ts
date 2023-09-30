import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { currentUser } from "@clerk/nextjs";

export async function POST(req: Request) {
  const user = await currentUser();

  const { contacts } = await req.json();
  const { userId } = auth();
  if (!userId || !user) return new Response("Unauthorized", { status: 401 });
  if (!contacts) return new Response("Bad Request", { status: 400 });
  const res = await prisma.emergencyContact.create({
    data: {
      userId,
      contacts,
      email: user.emailAddresses[0].emailAddress,
    },
  });

  if (res) {
    return NextResponse.json(res);
  }
  return new Response("Internal Server Error", { status: 500 });
}
