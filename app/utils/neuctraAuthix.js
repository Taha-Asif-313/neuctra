// src/authix.ts
import { NeuctraAuthix } from "@neuctra/authix";

export const authix = new NeuctraAuthix({
  baseUrl: process.env.NEXT_PUBLIC_NEUCTRA_AUTHIX_BASE_URL,
  apiKey: process.env.NEXT_PUBLIC_NEUCTRA_AUTHIX_API_KEY,
  appId: process.env.NEXT_PUBLIC_NEUCTRA_AUTHIX_APP_ID,
});