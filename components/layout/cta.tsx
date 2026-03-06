import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, ArrowUpRight } from "lucide-react";

interface CallToActionProps {
  icon?: React.ElementType;
  title?: string;
  description?: string;
  buttonText?: string;
  features?: string[];
}

export function CallToAction({
  icon: Icon = Zap,
  title = "Boost Your Productivity",
  description = "Unlock your team's full potential with our cutting-edge collaboration tools. Streamline workflows, enhance communication, and achieve more together.",
  buttonText = "Start Free Trial",
  features = [
    "Real-time collaboration features",
    "Advanced project management tools",
    "Customizable workflows and integrations",
    "24/7 priority customer support",
  ],
}: CallToActionProps) {
  return (
    <section>
      <div className="container mx-auto px-4 md:px-12 py-20 border-l border-r border-b border-dashed">
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
            <div className="flex-1 bg-muted p-8">
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
    </section>
  );
}
