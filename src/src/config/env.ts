import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  SERVER_URL: process.env.SERVER_URL,
  AUTH_TYPE: process.env.AUTHENTICATION_TYPE,
  API_KEY: process.env.AUTHENTICATION_API_KEY,
  WEBHOOK_ENABLED: process.env.WEBHOOK_ENABLED === "true",
  WEBHOOK_URL: process.env.WEBHOOK_URL,
  WEBHOOK_EVENTS: process.env.WEBHOOK_EVENTS || "all"
};
