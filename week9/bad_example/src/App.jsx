import { LoginPage } from "~/pages/LoginPage";
import { Navbar } from "~/components/Navbar";
import { RegisterPage } from "./pages/RegisterPage";
import { DashboardPage } from "./pages/DashboardPage";
import { useState } from "react";

const App = () => {
  const [page, setPage] = useState("login");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar setPage={setPage} />
      <div className="flex flex-1">
        {page === "login" ? (
          <LoginPage setPage={setPage} />
        ) : page === "register" ? (
          <RegisterPage setPage={setPage} />
        ) : page === "dashboard" ? (
          <DashboardPage />
        ) : null}
      </div>
    </div>
  );
};

export default App;
