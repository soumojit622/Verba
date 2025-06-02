/* eslint-disable @typescript-eslint/ban-ts-comment */
import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  // @ts-ignore
  driver: "pg",
  dbCredentials: {
    // @ts-ignore
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
