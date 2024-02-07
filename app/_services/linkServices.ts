import { Link } from "@prisma/client";
import prisma from "../_lib/prismadb";
import userServices from "./userServices";

const getLinks = async () => {
  const currentUser = await userServices.getCurrentUser();

  return prisma.link.findMany({
    where: { userId: currentUser?.id },
  });
};

/**
 * Create New Link
 * @param data
 * @returns
 */
const createLink = async (data: {
  title: string;
  url: string;
}): Promise<Link> => {
  const currentUser = await userServices.getCurrentUser();
  const { title, url } = data;

  return prisma.link.create({ data: { title, url, userId: currentUser?.id! } });
};

/**
 * DELETE existing link from database using linkId
 * @param linkId
 * @returns
 */
const deleteLink = async (linkId: string) => {
  const currentUser = await userServices.getCurrentUser();

  return prisma.link.delete({ where: { userId: currentUser?.id, id: linkId } });
};

/**
 * UPDATE essential infomation of the link in the database
 * @param linkId
 * @param title
 * @param url
 * @returns
 */
const updateLink = async (linkId: string, title: string, url: string) => {
  const currentUser = await userServices.getCurrentUser();

  return prisma.link.update({
    where: { userId: currentUser?.id, id: linkId },
    data: { title, url },
  });
};

/**
 * UPDATE active status of the link in the database
 * @param linkId
 * @param active
 * @returns
 */
const updateLinkActive = async (linkId: string, active: boolean) => {
  const currentUser = await userServices.getCurrentUser();

  return prisma.link.update({
    where: { userId: currentUser?.id, id: linkId },
    data: { active },
  });
};

const linkServices = {
  getLinks,
  createLink,
  deleteLink,
  updateLink,
  updateLinkActive,
};

export default linkServices;
