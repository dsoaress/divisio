import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: varchar({ length: 24 }).primaryKey().notNull(),
  firstName: varchar('first_name', { length: 50 }).notNull(),
  lastName: varchar('last_name', { length: 50 }).notNull(),
  email: varchar({ length: 255 }).unique().notNull(),
  avatar: varchar({ length: 255 }),
  createdAt: timestamp('created_at', { withTimezone: true, precision: 6 }).notNull()
})

export const sessions = pgTable('sessions', {
  id: varchar({ length: 24 }).primaryKey().notNull(),
  userId: varchar('user_id', { length: 24 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true, precision: 6 }).notNull(),
  expiresAt: timestamp('expires_at', { withTimezone: true, precision: 6 }).notNull()
})
