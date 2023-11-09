import { DashboardCard } from "./DashboardCard";

const posts = [
  {
    id: 1,
    title: "Cat Photo 1",
    image:
      "https://cdn.discordapp.com/attachments/812268715059314708/1156109068704944140/DSC00324.jpg",
    description: "It's a cat!",
  },
  {
    id: 2,
    title: "Cat Photo 2",
    image:
      "https://cdn.discordapp.com/attachments/812268715059314708/1156485730290380830/DSC00344.jpg",
    description: "It's also a cat",
  },
  {
    id: 3,
    title: "Cat Photo 3",
    image:
      "https://cdn.discordapp.com/attachments/812268715059314708/1156485730814677055/DSC00350.jpg",
    description: "Still a cat",
  },
  {
    id: 4,
    title: "Cat Photo 4",
    image:
      "https://cdn.discordapp.com/attachments/812268715059314708/1156485731427037294/DSC00358.jpg",
    description: "I think that's a cat",
  },
  {
    id: 5,
    title: "Cat Photo 5",
    image:
      "https://cdn.discordapp.com/attachments/812268715059314708/1156485732974731294/DSC00371.jpg",
    description: "Definitely a cat",
  },
  {
    id: 6,
    title: "Cat Photo 6",
    image:
      "https://cdn.discordapp.com/attachments/812268715059314708/1153508982065987594/Snapchat-1018333372.jpg",
    description: "Is that a cat?",
  },
];

export const DashboardPage = () => (
  <div className="flex flex-1 justify-center p-4">
    <div className="container mx-auto flex w-full flex-col gap-2">
      <h1 className="text-2xl">Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <DashboardCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  </div>
);
