import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { currentUser } from "@clerk/nextjs";

export async function POST(req: Request) {
  const user = await currentUser();

  const { emails } = await req.json();
  const { userId } = auth();
  if (!userId || !user) return new Response("Unauthorized", { status: 401 });
  if (!emails) return new Response("Bad Request", { status: 400 });
  const res = await prisma.emergencyContact.create({
    data: {
      userId,
      emails,
    },
  });

  if (res) {
    return NextResponse.json(res);
  }
  return new Response("Internal Server Error", { status: 500 });
}

export async function PUT(req: Request) {
  const { emails } = await req.json();
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });
  if (!emails) return new Response("Bad Request", { status: 400 });
  const res = await prisma.emergencyContact.update({
    where: {
      userId,
    },
    data: {
      emails,
    },
  });
  if (!res) return new Response("Internal Server Error", { status: 500 });
  return NextResponse.json(res);
}

export async function DELETE(req: Request) {
  const { userId } = auth();
  const {id}  = await req.json();
  if (!userId) return new Response("Unauthorized", { status: 401 });
  const res = await prisma.emergencyContact.delete({
    where: {
      id
    },
  });
  if (!res) return new Response("Internal Server Error", { status: 500 });
  return NextResponse.json(res);
}

export async function GET(req: Request) {
  const { userId } = auth();
  if (!userId) return new Response("Unauthorized", { status: 401 });
  const res = await prisma.emergencyContact.findUnique({
    where: {
      userId,
    },
  });
  if (!res) return new Response("Internal Server Error", { status: 500 });
  return NextResponse.json(res);
}
