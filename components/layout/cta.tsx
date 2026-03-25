"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { motion } from "motion/react";
import { SectionContainer } from "../containers/section-container";
import { ContactPopup } from "../shared/contact-popup";

interface CallToActionProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
  features?: string[];
}

export function CallToAction({
  icon: Icon = Zap,
  title = "Готовы начать проект?",
  description = "Напишите нам, и мы свяжемся с вами в течение 15 минут для обсуждения деталей.",
  features = [
    "Бесплатная консультация",
    "Анализ вашего проекта",
    "Разработка стратегии продвижения",
    "Подбор оптимального стека технологий",
  ],
}: CallToActionProps) {
  return (
    <SectionContainer id="cta" className="scroll-mt-14 md:scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          <Card className="overflow-hidden border-primary/20 bg-background/50 backdrop-blur shadow-2xl">
            <div className="flex flex-col items-center md:flex-row">
              <CardContent className="flex-1 p-8 lg:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <motion.span
                    className="flex size-14 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    <Icon className="size-7 text-primary" />
                  </motion.span>
                  <h3 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/70">
                    {title}
                  </h3>
                </div>
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  {description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <ContactPopup />
                </motion.div>
              </CardContent>
              <div className="hidden md:flex flex-1 p-8 lg:p-12 border-l border-border/50">
                <ul className="space-y-6 text-base font-medium">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div className="rounded-full p-1">
                        <svg
                          className="size-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
