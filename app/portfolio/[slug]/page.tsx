import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getCustomerById } from "@/actions/get-content";
import { Markdown } from "@/components/shared/markdown";
import { DirectusImage } from "@/components/shared/directus-image";
import { RuTubeFrame } from "@/components/shared/rutube-frame";

export async function generateMetadata(
  props: PageProps<"/portfolio/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project?.seo) {
    return { robots: { index: false, follow: false } };
  }

  const ogUrl = project.seo.og_image
    ? `${process.env.ASSETS}/${project.seo.og_image}`
    : undefined;

  return {
    title: project.seo.title,
    description: project.seo.meta_description,
    openGraph: {
      images: ogUrl
        ? [{ url: ogUrl, width: 1200, height: 630, alt: project.seo.title }]
        : undefined,
    },
  };
}

export default async function PortfolioPage(
  props: PageProps<"/portfolio/[slug]">
) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const customer =
    project.client !== null ? await getCustomerById(project.client) : null;

  return (
    <article className="my-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <Markdown markdown={project.content || ""} />
            <RuTubeFrame
              videoId={project.rutube_id || ""}
              title={project.title}
            />
          </div>
          {customer && (
            <aside className="md:w-1/3 md:border-l">
              <div className="pointer-events-none px-4 py-3 mx-4">
                <div className="flex items-center gap-3">
                  <DirectusImage
                    url={customer.cover_image}
                    alt={customer.title}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />

                  <div>
                    <h3 className="text-base font-medium m-0">
                      {customer.title}
                    </h3>
                    <p className="text-sm text-muted-foreground m-0">
                      {customer.content}
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </article>
  );
}
