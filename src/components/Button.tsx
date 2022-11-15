import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export function Button(props: ButtonProps) {
  const Component = props.asChild ? Slot : "button";
  return (
    <Component
      className="px-4 py-2 rounded bg-violet-400 text-white font-bold"
      {...props}
    />
  );
}
