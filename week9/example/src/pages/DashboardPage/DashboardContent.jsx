import { Spinner } from "~/components/Spinner";
import { useFetch } from "~/hooks/useFetch";
import { DashboardCard } from "./DashboardCard";

export const DashboardContent = () => {
  const {
    data: { posts },
    isLoading,
    isError,
    errorMsg,
  } = useFetch("posts");

  if (isError) {
    return errorMsg;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {posts.map((post) => (
        <DashboardCard key={post.id} post={post} />
      ))}
    </div>
  );
};
