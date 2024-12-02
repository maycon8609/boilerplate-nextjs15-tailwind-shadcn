import { User } from '@prisma/client';

import prisma from '@/lib/prisma';

export async function getUserByEmail(email: User['email']) {
  return await prisma.user.findUnique({ where: { email } });
}
