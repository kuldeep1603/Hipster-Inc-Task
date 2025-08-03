import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import {
  getborderpattern,
  getHeadingClass,
  getHeadingTextClass,
} from "../utils/themeClasses";

const Heading = () => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  return (
    <div className="mt-10 mb-5">
      <ul className="flex gap-3">
        <li>
          <span
            className={`border border-solid	border-4 ${getborderpattern(theme)}`}
          ></span>
        </li>
        <li>
          <p
            className={`text-[16px] font-semibold ${getHeadingTextClass(
              theme
            )}`}
          >
            This Month
          </p>
        </li>
      </ul>
      <ul className="my-2">
        <li>
          <p className={`text-[22px] ${getHeadingClass(theme)}`}>
            Best Selling Products
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Heading;
