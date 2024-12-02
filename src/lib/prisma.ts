/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';

declare global {
  let __database__: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(globalThis as any).__database__) {
    (globalThis as any).__database__ = new PrismaClient();
  }
  prisma = (globalThis as any).__database__;
}

export default prisma;
