import { notFound } from "next/navigation";
import { getCities, getCityBySlug } from "@/app/actions/cities";

export const revalidate = 60 * 60 * 24;
export const dynamicParams = false;
export const dynamic = "error";

export default async function CityPage({
  params,
}: {
  params: { slug: string };
}) {
  const { city } = await getCityBySlug(params.slug);
  if (!city) return notFound();

  return (
    <main style={{ padding: 16 }}>
      <h1>{city.title ?? city.slug}</h1>
      {city.content ? (
        <article dangerouslySetInnerHTML={{ __html: city.content }} />
      ) : (
        <p>Нет контента</p>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  const { cities } = await getCities();
  return (cities?.nodes ?? []).map(({ slug }) => ({ slug }));
}
