import { twMerge } from "tailwind-merge";

export const Card = ({ className, ...props }) => (
  <div
    className={twMerge(
      "flex flex-col gap-4 rounded-md bg-white p-4",
      className,
    )}
    {...props}
  />
);
