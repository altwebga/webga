import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

async function getPosts() {
  return directus.request(
    readItems("articles", {
      fields: ["slug", "title", "date_created", "status"],
      filter: { status: { _eq: "published" } },
      sort: ["-date_created"],
    })
  );
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <h2>
                <a href={`/blog/${post.slug}`}>{post.title}</a>
              </h2>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
