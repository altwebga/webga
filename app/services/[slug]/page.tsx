import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/actions/get-content";
import { Markdown } from "@/components/shared/markdown";
import { DirectusImage } from "@/components/shared/directus-image";

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = await getServiceBySlug(slug);

  if (!service?.seo) {
    return { robots: { index: false, follow: false } };
  }

  const ogUrl = service.seo.og_image
    ? `${process.env.ASSETS}/${service.seo.og_image}`
    : undefined;

  return {
    title: service.seo.title,
    description: service.seo.meta_description,
    openGraph: {
      images: ogUrl
        ? [{ url: ogUrl, width: 1200, height: 630, alt: service.seo.title }]
        : undefined,
    },
  };
}

export default async function ServicePage(
  props: PageProps<"/services/[slug]">
) {
  const { slug } = await props.params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <article className="mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <h1>{service.title}</h1>
            <Markdown markdown={service.content || ""} />
          </div>
          <aside className="md:w-1/3 md:border-l">
            <DirectusImage
              url={service.cover_image || ""}
              alt={service.title}
              width={600}
              height={600}
              loading="eager"
            />
          </aside>
        </div>
      </div>
    </article>
  );
}
