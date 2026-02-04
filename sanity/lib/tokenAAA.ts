import "server-only";

export const tokenAAA = process.env.SANITY_API_READ_AAA_TOKEN;

if (!tokenAAA) {
  throw new Error("Missing SANITY_API_READ_AAA_TOKEN");
}
