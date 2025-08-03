import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import { getFontClass, getColor } from "../utils/themeClasses";

const Contact = () => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <div className={` ${getFontClass(theme)} ${getColor(theme)}`}>
      <h2 className={`text-2xl mb-4 ${getFontClass(theme)}`}>Contact Us</h2>
      <p className="flex flex-col gap-y-2">
        <a href="mailto:kuldeepmourya197@gmail.com" target="_blank">
          kuldeepmourya197@gmail.com
        </a>
        <a href="tel:+919004991391" target="_blank">
          Click to call
        </a>
      </p>
    </div>
  );
};

export default Contact;
