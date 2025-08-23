"use server";
import { gql } from "./gql";

export type PostLite = {
  id: string;
  slug: string;
  title: string | null;
  date: string | null;
};
export type Post = PostLite & { content: string | null };

export async function getPosts(first = 20) {
  const q = /* GraphQL */ `
    query Posts($first: Int!) {
      posts(first: $first) {
        nodes {
          id
          slug
          title
          date
        }
      }
    }
  `;
  return gql<{ posts: { nodes: PostLite[] } }>(
    q,
    { first },
    { tags: ["wp:posts"] }
  );
}

export async function getPostBySlug(slug: string) {
  const q = /* GraphQL */ `
    query PostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        slug
        title
        date
        content
      }
    }
  `;
  return gql<{ post: Post | null }>(
    q,
    { slug },
    { tags: ["wp:post", `wp:post:${slug}`] }
  );
}
