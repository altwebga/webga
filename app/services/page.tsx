import { getPublishedServicesList } from "@/actions/get-content";
import { Container } from "@/components/container/container";
import { DirectusImage } from "@/components/shared/directus-image";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";

const text = {
  title: "Наши услуги",
  subTitle:
    "Полный комплкс услуг для быстрого старта ваше бизнеса в интернете.",
};

export default async function ServicesPage() {
  const services = await getPublishedServicesList();
  return (
    <Container className="mt-20">
      <h1>{text.title}</h1>
      <TextAnimate animation="blurIn" as="p">
        {text.subTitle}
      </TextAnimate>
      <div>
        <ul className="list-none grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="transition delay-50 duration-150 hover:translate-2"
            >
              <li>
                <MagicCard className="p-4 rounded-md shadow-md min-h-full">
                  <DirectusImage
                    url={service.cover_image || "/img/no-image.png"}
                    alt={service.title}
                    width={600}
                    height={600}
                  />
                  <div className="px-4">
                    <h3>{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-5">
                      {service.short_content || ""}
                    </p>
                  </div>
                </MagicCard>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Container>
  );
}
