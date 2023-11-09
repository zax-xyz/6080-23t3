import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      className={twMerge(
        `
          form-input rounded-md border border-gray-300 bg-white
          transition hover:border-indigo-300
          focus:border-indigo-300 focus:ring focus:ring-indigo-200/50
          aria-invalid:border-red-300 aria-invalid:ring-red-200/50
        `,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
