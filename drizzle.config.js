import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials:{
        url: "postgresql://ai-lms_owner:EIu3X7NZPjVG@ep-solitary-morning-a502p9kz.us-east-2.aws.neon.tech/AI-LMS-Database?sslmode=require"

  }
});