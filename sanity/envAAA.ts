export const apiVersionAAA =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-02-02";

export const datasetAAA = assertValue(
  process.env.NEXT_PUBLIC_SANITY_AAA_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_AAA_DATASET",
);

export const projectIdAAA = assertValue(
  process.env.NEXT_PUBLIC_SANITY_AAA_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_AAA_PROJECT_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
