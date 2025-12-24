const text = {
  subTitle: "Наши услуги",
  title:
    "Полный спектр решений для быстрого и эффективного старта вашего бизнеса в интернете",
  description:
    "Разрабатываем современные сайты с продуманной структурой и дизайном, настраиваем контекстную рекламу в Яндекс Директ, занимаемся SEO-продвижением и аналитикой. Помогаем привлекать клиентов, увеличивать продажи и усиливать присутствие бренда в сети.",
};

export function OurServices() {
  return (
    <section className="mt-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 md:flex-row items-start">
          <div className="md:w-1/4">
            <p className="text-xl text-muted-foreground">{text.subTitle}</p>
          </div>
          <div className="md:w-3/4">
            <h2 className="text-4xl md:text-6xl leading-10 md:leading-14">
              {text.title}
            </h2>
            <p className="max-w-4xl">{text.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
