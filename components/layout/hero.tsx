import { ArrowRight, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "../containers/section-container";

interface HeroProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  button1Text?: string;
  button1Link?: string;
  button2Text?: string;
  button2Link?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const Hero: React.FC<HeroProps> = ({
  badgeText = "автоматизация ващего бизнеса",
  title = "Разработка и продвижение сайтов <br />в Горно-Алтайске",
  subtitle = "Мы создаем современные и эффективные сайты, которые помогут вашему бизнесу выделиться на рынке и привлечь больше клиентов.",
  button1Text = "Заказать",
  button1Link = "#",
  button2Text = "Подробнее",
  button2Link = "#",
  imageSrc = "/img/hero_image.png",
  imageAlt = "Hero illustration",
}) => {
  return (
    <SectionContainer className="bg-[url('/img/hero_bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="grid items-center gap-12 md:grid-cols-2 md:px-12">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge
            variant="outline"
            className="group flex items-center gap-2 p-4"
          >
            {badgeText}
            <Rocket className="size-4 transition-transform group-hover:translate-x-1" />
          </Badge>
          <h1
            className="my-6 text-pretty text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="mb-8 max-w-xl text-lg text-muted-foreground">
            {subtitle}
          </p>
          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <Link href={button1Link}>
              <Button size="lg" className="w-full sm:w-48">
                {button1Text}
              </Button>
            </Link>
            <Link href={button2Link}>
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-48"
              >
                {button2Text}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="aspect-square w-full overflow-hidden rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={800}
            className="size-full object-contain"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
