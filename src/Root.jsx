import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <nav className="flex justify-between py-3 px-10 items-center shadow-lg shadow-slate-500/50">
        <h1 className="text-2xl font-extrabold text-slate-700 font-display">
          World Time
        </h1>

        <ul className="flex space-x-8 text-slate-700 font-extrabold font-display">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}
