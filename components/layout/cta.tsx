import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowUpRight } from "lucide-react";
import { SectionContainer } from "../containers/section-container";
import { ContactPopup } from "../shared/contact-popup";

interface CallToActionProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
  buttonText?: string;
  features?: string[];
}

export function CallToAction({
  icon: Icon = Zap,
  title = "Обсудим проект?",
  description = "Оставьте заявку и мы свяжемся с вами в ближайшее время",
  features = [
    "Бесплатная консультация",
    "Анализ старого сайта",
    "Стратегия продвижения",
    "Стек технологий",
  ],
}: CallToActionProps) {
  return (
    <SectionContainer id="cta">
      <div className="max-w-5xl mx-auto">
        <Card className="overflow-hidden">
          <div className="flex flex-col items-center md:flex-row">
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
              <ContactPopup />
            </CardContent>
            <div className="hidden md:flex flex-1 p-8">
              <ul className="space-y-4 text-sm">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
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
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}
