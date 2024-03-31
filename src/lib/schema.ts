import { relations } from "drizzle-orm";
import {
    integer,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    surname: text("surname").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(users.email),
    };
  }
);

export const userRelations = relations(users, ({one}) => ({
profile : one(userProfiles, {
    fields: [users.id],
    references: [userProfiles.userId],
  })
}))

export const userProfiles = pgTable(
  "profiles",
  {
    id: serial("id").primaryKey(),
    userId: integer("userId").notNull().references(() => users.id),
  }
)

