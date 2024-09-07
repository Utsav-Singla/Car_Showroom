/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./configs/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Cars_owner:CaOonviE3x9y@ep-rough-mountain-a5izyat5.us-east-2.aws.neon.tech/Cars?sslmode=require',
  }
};