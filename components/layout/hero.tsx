"use client";

import { ArrowRight, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SectionContainer } from "../containers/section-container";
import { ContactPopup } from "../shared/contact-popup";

interface HeroProps {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  button2Text?: string;
  button2Link?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const Hero: React.FC<HeroProps> = ({
  badgeText = "Автоматизация вашего бизнеса",
  title = "Разработка и продвижение сайтов <br />в Горно-Алтайске",
  subtitle = "Мы создаем современные и эффективные сайты, которые помогут вашему бизнесу выделиться на рынке, привлечь больше клиентов и увеличить прибыль.",
  button2Text = "Услуги",
  button2Link = "#services",
  imageSrc = "/img/hero_image.png",
  imageAlt = "Hero illustration",
}) => {
  return (
    <SectionContainer id="hero" className="bg-[url('/img/hero_bg.svg')] bg-cover bg-center bg-no-repeat scroll-mt-20">
      <div className="grid items-center gap-12 md:grid-cols-2 md:px-12">
        {/* Left Section */}
        <motion.div 
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Badge
            variant="outline"
            className="group flex items-center gap-2 p-4"
          >
            {badgeText}
            <Rocket className="size-4 transition-transform group-hover:translate-x-1" />
          </Badge>
          <h1
            className="my-6 text-pretty text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-linear-to-r from-foreground to-foreground/70"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="mb-8 max-w-xl text-lg text-muted-foreground">
            {subtitle}
          </p>
          <div className="flex w-full flex-col gap-4 sm:flex-row">
            <ContactPopup />
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
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="aspect-square w-full overflow-hidden rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={800}
            className="size-full object-contain drop-shadow-xl"
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
};
