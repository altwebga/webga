import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowUpRight } from "lucide-react";
import { SectionContainer } from "../containers/section-container";
import Image from "next/image";

interface CallToActionProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
  buttonText?: string;
  features?: string[];
}

export function CallToAction({
  icon: Icon = Zap,
  title = "Остались вопросы?",
  description = "Unlock your team's full potential with our cutting-edge collaboration tools. Streamline workflows, enhance communication, and achieve more together.",
  buttonText = "Перезвоните мне",
  features = [
    "Бесплатная консультация",
    "Анализ старого сайта",
    "Стратегия продвижения",
    "Стек технологий",
  ],
}: CallToActionProps) {
  return (
    <SectionContainer>
      <div className="md:px-12">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <CardContent className="flex-1 p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </span>
                <h3 className="text-3xl font-bold">{title}</h3>
              </div>
              <p className="mb-6 text-lg text-muted-foreground">
                {description}
              </p>
              <Button size="lg" className="group">
                {buttonText}
                <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Button>
            </CardContent>
            <div className="hidden md:flex flex-1 items-center justify-center p-8">
              <Image
                src="/img/question.png"
                alt="CTA"
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}
