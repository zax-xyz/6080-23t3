import { twMerge } from "tailwind-merge";

export const Button = ({ className, ...props }) => (
  <button
    className={twMerge(
      `
        rounded-md bg-indigo-600 px-3 py-1.5 text-white
        transition hover:bg-indigo-700 focus:ring focus:ring-indigo-200/50
      `,
      className,
    )}
    {...props}
  />
);
