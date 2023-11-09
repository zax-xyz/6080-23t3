import { Button } from "~/components/Button";
import { Card } from "~/components/Card";
import { Input } from "~/components/Input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export const LoginPage = ({ setPage }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <div className="flex flex-1 items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <h1 className="text-2xl">Login</h1>
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
          <Button type="submit">Login</Button>
        </form>
        <span>
          Don&apos;t have an account?{" "}
          <a
            className="text-indigo-600 hover:text-indigo-700"
            onClick={() => setPage("register")}
          >
            Register now
          </a>
          .
        </span>
      </Card>
    </div>
  );
};
