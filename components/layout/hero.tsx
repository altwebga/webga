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
  badgeText = "трасформация бизнеса",
  title = "Разработка и продвижение сайтов в Горно-Алтайске",
  subtitle = "Мы создаем современные и эффективные сайты, которые помогут вашему бизнесу выделиться на рынке и привлечь больше клиентов.",
  button1Text = "Заказать",
  button1Link = "#",
  button2Text = "Подробнее",
  button2Link = "#",
  imageSrc = "/img/no-image.svg",
  imageAlt = "Hero illustration",
}) => {
  return (
    <SectionContainer>
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge variant="outline" className="group flex items-center gap-2">
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
        <div className="aspect-square w-full overflow-hidden rounded-lg border border-muted/20 shadow-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={600}
            className="size-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
