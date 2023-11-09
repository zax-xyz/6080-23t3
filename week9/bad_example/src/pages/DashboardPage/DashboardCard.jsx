import { Card } from "~/components/Card";

export const DashboardCard = ({ post }) => (
  <div>
    <Card className="gap-0 p-0">
      <h2 className="px-4 py-3 text-lg font-medium">{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p className="px-4 py-2">{post.description}</p>
    </Card>
  </div>
);
