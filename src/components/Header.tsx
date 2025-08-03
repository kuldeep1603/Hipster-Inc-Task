import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../redux/store";
import {
  getFontClass,
  getHeaderClass,
  getBgColor,
} from "../utils/themeClasses";
import { setTheme, type Theme } from "../redux/slice/themeSlice";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  const dispatch = useDispatch();

  return (
    <header
      className={`p-4 flex relative justify-between items-center ${getHeaderClass(
        theme
      )}`}
    >
      <Link to="/">
        <h1 className="text-2xl font-bold">🌟 My Shop</h1>
      </Link>
      <div className={`menu ${isOpen ? "block" : "hidden"} lg:block`}>
        <ul className="flex gap-7 flex-wrap">
          <li>
            <Link
              className={`hover:border hover:border-b-orange-900 ${getFontClass(
                theme
              )}`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`hover:border hover:border-b-orange-900 ${getFontClass(
                theme
              )}`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`hover:border hover:border-b-orange-900 ${getFontClass(
                theme
              )}`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <select
        value={theme}
        onChange={(e) => dispatch(setTheme(e.target.value as Theme))}
        className={`p-2 rounded border-0  ${getBgColor(theme)} ${getFontClass(
          theme
        )}`}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <FaBars
        className={`md:hidden block ${getFontClass(theme)}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </header>
  );
};

export default Header;
