"use server";
import { gql } from "./gql";

export type CityLite = { slug: string };
export type City = {
  id: string;
  slug: string;
  title: string | null;
  content: string | null;
};

export async function getCities() {
  const q = /* GraphQL */ `
    query AllCitySlugs {
      cities(first: 10000) {
        nodes {
          slug
        }
      }
    }
  `;
  return gql<{ cities: { nodes: CityLite[] } }>(q, undefined, {
    tags: ["wp:cities"],
  });
}

export async function getCityBySlug(slug: string) {
  const q = /* GraphQL */ `
    query CityBySlug($slug: ID!) {
      city(id: $slug, idType: SLUG) {
        id
        slug
        title
        content
      }
    }
  `;
  return gql<{ city: City | null }>(
    q,
    { slug },
    { tags: ["wp:city", `wp:city:${slug}`] }
  );
}
