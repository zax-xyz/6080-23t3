import { useAtom } from "jotai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authenticatedAtom } from "~/atoms";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const links = {
  "/login": "Login",
  "/register": "Register",
};

export const Navbar = () => {
  const [authenticated, setAuthenticated] = useAtom(authenticatedAtom);
  const navigate = useNavigate();

  return (
    <nav className="flex h-16 items-center bg-white px-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1>
          <Link to="/">App Name</Link>
        </h1>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            {Object.entries(links).map(([to, label]) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : ""
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          {authenticated && (
            <>
              <div className="rounded-full bg-gray-50 p-2 text-indigo-600">
                MV
              </div>
              <button
                className="text-gray-600 hover:text-indigo-600"
                onClick={() => {
                  setAuthenticated(false);
                  navigate("/login");
                }}
              >
                <ArrowRightOnRectangleIcon className="h-6 w-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
