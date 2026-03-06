import Image from "next/image";

const content = {
  title: "Разработка и продвижение сайтов",
  inCity: "в Горно-Алтайске",
  description:
    "Создаем сайты, которые продают. От лендингов до интернет-магазинов. Продвигаем в Яндекс и Google. Гарантия результата.",
};

export function Hero() {
  return (
    <section className="h-[calc(100vh-58px)]">
      <div className="container mx-auto px-4 md:px-20 border-l border-r border-b border-dashed h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
        <div className="md:w-1/2">
          <h1 className="flex flex-col gap-2 text-3xl md:text-4xl ">
            {content.title}
            <span className="text-primary text-4xl md:text-7xl font-extrabold">
              {content.inCity}
            </span>
          </h1>
          <p className="text-muted-foreground mt-8">{content.description}</p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <Image
            src={"/img/no-image.svg"}
            alt="text"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
