"use client";
import { useTheme } from "next-themes";
import { MagicCard } from "../ui/magic-card";
import { DirectusImage } from "../shared/directus-image";
import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  image: string;
  price?: string;
  short_content?: string;
  className?: string;
};

export function ServiceCard({
  title,
  image,
  price,
  short_content,
  className,
}: ServiceCardProps) {
  const { theme } = useTheme();
  return (
    <MagicCard
      className={cn("rounded-md relative", className)}
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <span className="absolute top-4 right-4 bg-background/70 px-4 py-2 rounded-md font-bold">
        {price}
      </span>
      <div className="p-2">
        <DirectusImage
          url={image || "/img/no-image.png"}
          alt={title}
          width={400}
          height={400}
        />
        <div className="px-4">
          <h3>{title}</h3>
          <p className="text-sm text-muted-foreground leading-5">
            {short_content}
          </p>
        </div>
      </div>
    </MagicCard>
  );
}
