import { NextResponse } from "next/server";
import linkServices from "@/app/_services/linkServices";

export const DELETE = async (
  req: Request,
  params: { params: { linkId: string } }
) => {
  const linkId = params.params.linkId;

  return linkServices
    .deleteLink(linkId)
    .then((link) => {
      return NextResponse.json(link);
    })
    .catch((err) => {
      return NextResponse.error();
    });
};

export const PATCH = async (
  req: Request,
  params: { params: { linkId: string } }
) => {
  const linkId = params.params.linkId;
  const { active } = await req.json();

  return linkServices
    .updateLinkActive(linkId, active)
    .then((link) => {
      return NextResponse.json(link);
    })
    .catch((err) => {
      console.log(err);
      return NextResponse.error();
    });
};

export const PUT = async (
  req: Request,
  params: { params: { linkId: string } }
) => {
  const linkId = params.params.linkId;
  const { title, url } = await req.json();

  return linkServices
    .updateLink(linkId, title, url)
    .then((link) => {
      return NextResponse.json(link);
    })
    .catch((err) => {
      console.log(err);
    });
};
