import {
  pgTable,
  serial,
  text,
  integer,
  bigint,
  timestamp,
  primaryKey
} from 'drizzle-orm/pg-core';
import { relations, sql } from 'drizzle-orm';

// Advocates table (unchanged except specialties removed)
export const advocates = pgTable('advocates', {
  id: serial('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  city: text('city').notNull(),
  degree: text('degree').notNull(),
  yearsOfExperience: integer('years_of_experience').notNull(),
  phoneNumber: bigint('phone_number', { mode: 'number' }).notNull(),
  createdAt: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`)
});

// Specialties table
export const specialties = pgTable('specialties', {
  id: serial('id').primaryKey(),
  title: text('title').notNull()
});

// Categories table
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  title: text('title').notNull()
});

// Join table: categories to specialties (many-to-many)
export const categorySpecialties = pgTable(
  'category_specialties',
  {
    category: integer('category')
      .notNull()
      .references(() => categories.id),
    specialty: integer('specialty')
      .notNull()
      .references(() => specialties.id)
  },
  (table) => ({
    pk: primaryKey({ columns: [table.category, table.specialty] })
  })
);

// Join table: advocates to specialties (many-to-many)
export const advocateSpecialties = pgTable(
  'advocate_specialties',
  {
    advocate: integer('advocate')
      .notNull()
      .references(() => advocates.id),
    specialty: integer('specialty')
      .notNull()
      .references(() => specialties.id)
  },
  (table) => ({
    pk: primaryKey({ columns: [table.advocate, table.specialty] })
  })
);

export const advocatesRelations = relations(advocates, ({ many }) => ({
  advocateSpecialties: many(advocateSpecialties)
}));

export const advocateSpecialtiesRelations = relations(
  advocateSpecialties,
  ({ one }) => ({
    advocate: one(advocates, {
      fields: [advocateSpecialties.advocate],
      references: [advocates.id]
    }),
    specialty: one(specialties, {
      fields: [advocateSpecialties.specialty],
      references: [specialties.id]
    })
  })
);

export const specialtiesRelations = relations(specialties, ({ many }) => ({
  advocateSpecialties: many(advocateSpecialties)
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  categorySpecialties: many(categorySpecialties)
}));

export const categorySpecialtiesRelations = relations(
  categorySpecialties,
  ({ one }) => ({
    category: one(categories, {
      fields: [categorySpecialties.category],
      references: [categories.id]
    }),
    specialty: one(specialties, {
      fields: [categorySpecialties.specialty],
      references: [specialties.id]
    })
  })
);
