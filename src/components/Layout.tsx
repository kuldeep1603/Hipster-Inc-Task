import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getLayoutClass, getFontClass } from "../utils/themeClasses";
import Heading from "./Heading";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  const isDark = theme === "dark";
  const location = useLocation();
  const CurrLocation = location.pathname;

  return (
    <>
      {theme == "dark" ? "" : <Header />}
      <div className={`${getLayoutClass(theme)} ${getFontClass(theme)}`}>
        {isDark && <Sidebar />}
        <div className={`flex-1 ${theme == "dark" ? "px-5" : ""}`}>
          {theme === "dark" ? <Header /> : ""}
          {CurrLocation === "/" && <Heading />}
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
