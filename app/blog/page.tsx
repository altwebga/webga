import { getPublishedArticlesList } from "@/actions/get-content";
import { Container } from "@/components/container/container";
import { DirectusImage } from "@/components/shared/directus-image";
import { MagicCard } from "@/components/ui/magic-card";
import { TextAnimate } from "@/components/ui/text-animate";
import Link from "next/link";

const text = {
  title: "Блог",
  subTitle: "Заметки по web-разработке в основном что-бы не забыть",
};

export default async function BlogPage() {
  const articles = await getPublishedArticlesList();
  return (
    <Container className="my-20">
      <h1>{text.title}</h1>
      <TextAnimate animation="blurIn" as="p">
        {text.subTitle}
      </TextAnimate>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="grid grid-cols-1 gap-4 md:w-2/3">
          {articles.map((article) => (
            <Link key={article.id} href={`blog/${article.slug}`}>
              <MagicCard className="min-h-60 p-4 bg-background">
                <div className="flex flex-col md:flex-row gap-8">
                  <DirectusImage
                    url={article.cover_image || ""}
                    width={320}
                    height={320}
                    className="object-cover w-80 h-80"
                  />

                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.seo.meta_description}</p>
                  </div>
                </div>
              </MagicCard>
            </Link>
          ))}
        </div>
        <aside className="w-1/3"></aside>
      </div>
    </Container>
  );
}
