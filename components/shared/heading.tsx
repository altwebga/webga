import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  subtitle?: string;
}

export function Heading({
  as: Tag = "h2",
  title,
  subtitle,
  className,
}: HeadingProps) {
  return (
    <div>
      {subtitle && (
        <Badge variant="outline" className="p-4">
          {subtitle}
        </Badge>
      )}
      <Tag
        className={cn(
          "text-pretty text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl",
          className,
        )}
      >
        {title}
      </Tag>
    </div>
  );
}
