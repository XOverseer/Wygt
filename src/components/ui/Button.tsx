import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-charcoal text-white hover:opacity-90",
      secondary: "bg-brand-blue text-white hover:opacity-90",
      outline: "border border-charcoal bg-transparent text-charcoal hover:bg-charcoal hover:text-white",
      ghost: "bg-transparent text-brand-blue hover:text-charcoal font-bold tracking-[0.1em]",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs font-semibold",
      md: "px-5 py-2.5 text-[12px] font-semibold",
      lg: "px-8 py-4 text-sm font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-[4px] transition-all focus:ring-2 focus:ring-brand-blue focus:outline-none disabled:opacity-50 uppercase tracking-widest",
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
