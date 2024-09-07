
import { integer, json, pgTable , serial , varchar } from "drizzle-orm/pg-core"
import { ref } from "firebase/storage"

export const carListing=pgTable('carListing',{
  id:serial('id').primaryKey(),
  title:varchar('title').notNull(),
  originalPrice:varchar('originalPrice').notNull(),
  category:varchar('category').notNull(),
  model:varchar('model').notNull(),
  driveType:varchar('driveType').notNull(),
  fuelType:varchar('fuelType').notNull(),
  tagline:varchar('tagline').notNull(),
  sellingPrice:varchar('sellingPrice').notNull(),
  condition:varchar('condition').notNull(),
  make:varchar('make').notNull(),
  year:varchar('year').notNull(),
  transmission:varchar('transmission').notNull(),
  mileage:varchar('mileage').notNull(),
  listing:varchar('listing').notNull(),
  createdby:varchar('createdby').notNull(),
  postedon:varchar('postedon'),
  username:varchar('username').notNull().default('Utsav'),
  userImageUrl:varchar('userImageUrl').default('https://app.gemoo.com/share/image-annotation/689230991630557184?codeId=Pak9xLneBALyN&origin=imageurlgenerator&card=689230988811984896')
})

export const carImages = pgTable('carImages',{
  id:serial('id').primaryKey(),
  imageUrl:varchar('imageUrl').notNull(),
  carListingId:integer('carListingId').notNull().references(()=>carListing.id)
})