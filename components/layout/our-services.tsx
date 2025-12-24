import { TextAnimate } from "../ui/text-animate";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { ServiceCard } from "../card/service-card";
import { Button } from "../ui/button";

const text = {
  subTitle: "Наши услуги",
  title:
    "Полный спектр решений для быстрого и эффективного старта вашего бизнеса в интернете",
  description:
    "Разрабатываем современные сайты с продуманной структурой и дизайном, настраиваем контекстную рекламу в Яндекс Директ, занимаемся SEO-продвижением и аналитикой. Помогаем привлекать клиентов, увеличивать продажи и усиливать присутствие бренда в сети.",
};

async function getServices() {
  return directus.request(
    readItems("services", {
      fields: ["title", "id", "cover_image", "short_content", "price"],
      filter: { status: { _eq: "published" } },
    })
  );
}

export async function OurServices() {
  const services = await getServices();

  return (
    <section className="my-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row items-start">
          <div className="md:w-1/4">
            <p className="text-xl text-muted-foreground">{text.subTitle}</p>
          </div>
          <div className="md:w-3/4">
            <TextAnimate
              animation="blurIn"
              as="h2"
              className="text-4xl md:text-6xl leading-10 md:leading-14"
            >
              {text.title}
            </TextAnimate>

            <p className="max-w-4xl">{text.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
          {services.slice(0, 4).map((service) => (
            <ServiceCard
              image={service.cover_image || "/img/no-image.png"}
              key={service.id}
              title={service.title}
              short_content={service.short_content || ""}
              price={service.price || ""}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Button size={"lg"}>Все услуги</Button>
        </div>
      </div>
    </section>
  );
}
