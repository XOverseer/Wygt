import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "dark" | "outline" | "outline-light" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants: Record<string, string> = {
      primary: "bg-teal text-cream hover:bg-teal-dark shadow-sm",
      dark: "bg-charcoal text-cream hover:bg-charcoal-mid shadow-sm",
      outline: "border-2 border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-cream",
      "outline-light": "border border-white/50 bg-transparent text-cream hover:bg-white/10",
      ghost: "bg-transparent text-teal hover:text-teal-dark font-semibold",
    };

    const sizes = {
      sm: "px-5 py-2 text-[11px] font-semibold",
      md: "px-6 py-2.5 text-[11px] font-semibold",
      lg: "px-8 py-4 text-[12px] font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg transition-all duration-200 focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:outline-none disabled:opacity-50 uppercase tracking-[0.1em]",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
