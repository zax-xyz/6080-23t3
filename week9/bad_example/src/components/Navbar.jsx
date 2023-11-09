import { useAtom } from "jotai";
import { authenticatedAtom } from "~/atoms";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

const links = {
  login: "Login",
  register: "Register",
};

export const Navbar = ({ setPage }) => {
  const [authenticated, setAuthenticated] = useAtom(authenticatedAtom);

  return (
    <nav className="flex h-16 items-center bg-white px-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1>
          <a>App Name</a>
        </h1>
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            {Object.entries(links).map(([to, label]) => (
              <li key={to}>
                <a onClick={() => setPage(to)}>{label}</a>
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
                  setPage("login");
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
