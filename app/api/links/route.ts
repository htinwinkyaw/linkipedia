import { NextResponse } from "next/server";
import linkServices from "@/app/_services/linkServices";

export const POST = async (req: Request) => {
  const body = await req.json();
  const link = await linkServices.createLink(body);
  return NextResponse.json(link);
};
