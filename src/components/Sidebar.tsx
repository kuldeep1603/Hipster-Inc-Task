import { Link } from "react-router-dom";
const Sidebar = () => (
  // const theme = useSelector((state: RootState) => state.theme.currentTheme);

  <aside className="md:w-64 bg-gray-800 text-white p-4 min-h-screen md:block hidden">
    <nav className="space-y-4 flex flex-col gap-y-3 items-start px-3 mt-4">
      <Link className={`hover:border hover:border-b-orange-900`} to="/">
        Home
      </Link>
      <Link className={`hover:border hover:border-b-orange-900`} to="/about">
        About
      </Link>
      <Link className={`hover:border hover:border-b-orange-900`} to="/contact">
        Contact
      </Link>
    </nav>
  </aside>
);

export default Sidebar;
