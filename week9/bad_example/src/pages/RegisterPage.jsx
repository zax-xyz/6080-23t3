import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/Button";
import { Card } from "~/components/Card";
import { Input } from "~/components/Input";

const schema = z
  .object({
    username: z.string().min(1),
    password: z.string().min(1),
    confirmPassword: z.string().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const RegisterPage = ({ setPage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <h1 className="text-2xl">Register</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) =>
            handleSubmit((data) => {
              console.log(data);
              setPage("dashboard");
            })(e)
          }
        >
          <label className="flex flex-col">
            Username
            <Input
              type="text"
              {...register("username")}
              aria-invalid={!!errors.username}
            />
          </label>
          {errors.username && (
            <span className="text-red-600">{errors.username.message}</span>
          )}

          <label className="flex flex-col">
            Password
            <Input
              type="password"
              {...register("password")}
              aria-invalid={!!errors.password}
            />
          </label>
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}

          <label className="flex flex-col">
            Confirm Password
            <Input
              type="password"
              {...register("confirmPassword")}
              aria-invalid={!!errors.confirmPassword}
            />
          </label>
          {errors.confirmPassword && (
            <span className="text-red-600">
              {errors.confirmPassword.message}
            </span>
          )}

          <Button type="submit">Register</Button>
        </form>
        <span>
          Already have an account?{" "}
          <a
            onClick={() => setPage("dashboard")}
            className="text-indigo-600 hover:text-indigo-700"
          >
            Login now
          </a>
          .
        </span>
      </Card>
    </div>
  );
};
