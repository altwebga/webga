"use server";

type FetchOpts = { revalidate?: number; tags?: string[] };

export async function gql<TData>(
  query: string,
  variables?: Record<string, unknown>,
  opts: FetchOpts = {}
) {
  const { revalidate = 60 * 60 * 24, tags = [] } = opts;

  const res = await fetch(process.env.WPGRAPHQL_ENDPOINT!, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate, tags },
  });

  if (!res.ok) throw new Error(`GraphQL HTTP ${res.status}`);
  const json = (await res.json()) as {
    data?: TData;
    errors?: { message: string }[];
  };
  if (json.errors?.length)
    throw new Error(json.errors.map((e) => e.message).join("; "));
  return json.data as TData;
}
