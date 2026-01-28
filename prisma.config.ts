import * as dotenv from "dotenv"; // Import everything as 'dotenv'
import { defineConfig, env } from "prisma/config";

// Specifically point to the file Next.js uses
dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "db/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
