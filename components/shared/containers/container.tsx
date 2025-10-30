import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4", className)} {...rest}>
      {children}
    </div>
  );
}
