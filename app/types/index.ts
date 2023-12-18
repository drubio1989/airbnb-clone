import { User } from "@prisma/client";
import { Listing } from '@prisma/client';

export type SafeListing = Omit<
  Listing,
  "createdAt"
> & {
  createdAt: String;
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
  > & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
  }

export default SafeUser;