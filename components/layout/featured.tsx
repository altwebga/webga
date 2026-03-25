"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, RussianRuble, ThumbsUp, type LucideIcon } from "lucide-react";
import { motion, type Variants } from "motion/react";
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

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

function FeaturedPage({ title, description, stats }: EnhancedStatSectionProps) {
  return (
    <SectionContainer id="featured" className="scroll-mt-14 md:scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Heading as="h2" title={title} className="text-center mb-8" />
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground md:mb-16 lg:mb-20">
          {description}
        </p>
      </motion.div>
      <motion.div 
        className="grid gap-8 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="h-full border border-transparent hover:border-border transition-colors group">
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                <stat.icon className="mb-4 h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mb-2 text-5xl font-bold text-foreground md:text-6xl group-hover:text-primary transition-colors duration-300">
                  {stat.value}
                </p>
                <p className="text-xl font-semibold text-primary">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}

export const Featured = () => {
  return <FeaturedPage {...defaultProps} />;
};
