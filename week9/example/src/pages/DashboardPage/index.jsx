import { DashboardContent } from "./DashboardContent";

export const DashboardPage = () => (
  <div className="flex flex-1 justify-center p-4">
    <div className="container mx-auto flex w-full flex-col gap-2">
      <h1 className="text-2xl">Dashboard</h1>
      <DashboardContent />
    </div>
  </div>
);
