"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, RussianRuble, ThumbsUp, type LucideIcon } from "lucide-react";
import { SectionContainer } from "../containers/section-container";
import { Heading } from "../shared/heading";

interface Stat {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface EnhancedStatSectionProps {
  title: string;
  description: string;
  stats: Stat[];
}

const defaultProps: EnhancedStatSectionProps = {
  title: "Наши преимущества",
  description:
    "Мы предлагаем полный спектр услуг по разработке и продвижению сайтов в Горно-Алтайске. Наша команда профессионалов готова помочь вашему бизнесу выделиться на рынке и привлечь больше клиентов.",
  stats: [
    {
      label: "Опыт",
      value: "> 12 лет",
      description: "в веб-разработке",
      icon: Clock,
    },
    {
      label: "Стоимость",
      value: "-30%",
      description: "ниже чем у конкурентов",
      icon: RussianRuble,
    },
    {
      label: "Качество",
      value: "100%",
      description: "гарантия качества",
      icon: ThumbsUp,
    },
  ],
};

function FeaturedPage({ title, description, stats }: EnhancedStatSectionProps) {
  return (
    <SectionContainer>
      <Heading as="h2" title={title} className="text-center mb-8" />
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground md:mb-16 lg:mb-20">
        {description}
      </p>
      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
              <stat.icon className="mb-4 h-12 w-12 text-primary" />
              <p className="mb-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
              <p className="mb-2 text-5xl font-bold text-foreground md:text-6xl">
                {stat.value}
              </p>
              <p className="text-xl font-semibold text-primary">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

export const Featured = () => {
  return <FeaturedPage {...defaultProps} />;
};
