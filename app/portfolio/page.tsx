import { getPublishedProjectsList } from "@/actions/get-content";
import { Container } from "@/components/container/container";
import { DirectusImage } from "@/components/shared/directus-image";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";

const text = {
  title: "Наши работы",
  subTitle:
    "Некоторые наши проекты которые нам разрешено показывать условиями договора",
};

export default async function PortfolioPage() {
  const projects = await getPublishedProjectsList();
  return (
    <Container className="mt-20">
      <h1>{text.title}</h1>
      <TextAnimate animation="blurIn" as="p">
        {text.subTitle}
      </TextAnimate>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`portfolio/${project.slug}`}
            className="transition delay-50 duration-150 hover:-translate-2"
          >
            <MagicCard className="p-4 rounded-md">
              <DirectusImage
                url={project.cover_image || ""}
                alt={project.title}
                width={300}
                height={300}
                className="w-full object-contain"
              />
              <h3>{project.title}</h3>
            </MagicCard>
          </Link>
        ))}
      </div>
    </Container>
  );
}
