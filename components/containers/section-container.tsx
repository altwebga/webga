import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionContainer({
  children,
  className,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "container mx-auto px-4 py-20 md:px-6 border-l border-r border-b border-dashed",
        className,
      )}
    >
      {children}
    </section>
  );
}
