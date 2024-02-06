import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import prisma from "../_lib/prismadb";

const createUser = async (data: {
  name: string;
  email: string;
  password1: string;
  password2: string;
}): Promise<User | null> => {
  const { name, email, password1, password2 } = data;
  if (password1 !== password2) return null;

  const password = await bcrypt.hash(password1, 10);

  const user = await prisma.user.create({
    data: { name, email, password },
  });

  return user;
};

const getSession = async () => {
  return await getServerSession();
};

const getCurrentUser = async () => {
  const session = await getSession();

  if (!session?.user.email) return null;

  const currentUser = await prisma.user.findFirst({
    where: { email: session.user.email },
  });

  if (!currentUser) return null;

  return { ...currentUser };
};

const authenticate = async (email?: string, password?: string) => {
  if (!email || !password) return;

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) return;

  let isCorrectPassword;
  if (user.password) {
    isCorrectPassword = await bcrypt.compare(password, user.password);
  }

  if (!isCorrectPassword) return;

  return user;
};

const userServices = {
  createUser,
  authenticate,
  getCurrentUser,
};

export default userServices;
