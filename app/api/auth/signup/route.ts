import { NextResponse } from "next/server";
import userServices from "@/app/_services/userServices";

export const POST = async (req: Request) => {
  const body = await req.json();
  const user = userServices.createUser(body);
  return NextResponse.json(user);
};
