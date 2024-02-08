import algoliasearch from "algoliasearch/lite";

export const searchClient = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID || "",
  process.env.ALGOLIA_API_KEY || "",
);
