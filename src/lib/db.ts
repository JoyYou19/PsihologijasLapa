import "@/lib/config";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import { users } from "./schema";
import * as schema from "./schema";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";

export const db = drizzle(sql, { schema });

export const getUsers = async () => {
  const selectResult = await db.select().from(users);
  // console.log("Results", selectResult);
  return selectResult;
};

export type NewUser = typeof users.$inferInsert;

export const insertUser = async (user: NewUser) => {
// Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);

  // Replace the plain text password with the hashed password
  user.password = hashedPassword;
  const insertedUser = await db.insert(users).values(user).returning({userId: users.id});

  await db.insert(schema.userProfiles).values({
    userId: insertedUser[0].userId,
  }).execute();

  return insertedUser;
};

export const loginUser = async (email: string, password: string): Promise<NewUser | null> => {
  // Retrieve the user record from the database
  const userRecord = await db.query.users.findFirst({where: eq(users.email,email)});

  // If no user record was found, return null
  if (!userRecord) {
    return null;
  }
  // Compare the provided password with the stored hashed password
  const passwordMatch = await bcrypt.compare(password, userRecord.password);

  // If the passwords match, return the user record
  if (passwordMatch) {
    return userRecord;
  }

  // If the passwords do not match, return null
  return null;
};

export const validateUserId = async (userId: string) => {

  if(userId !== undefined) {

    const user = 1;


    const userRecord = await db.query.users.findFirst({where: eq(users.id, user)});
      return userRecord !== null;

  }

  return false;
}

export const getUsers2 = async () => {
  const result = await db.query.users.findMany();
  return result;
};
