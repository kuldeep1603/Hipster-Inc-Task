import { useSelector } from "react-redux";
import { type RootState } from "../redux/store";
import { getFontClass, getColor } from "../utils/themeClasses";

const About = () => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);

  return (
    <div className={`${getFontClass(theme)} ${getColor(theme)}`}>
      <h2 className={`text-2xl mb-4 ${getFontClass(theme)}`}>About Us</h2>
      <p className={`${getFontClass(theme)}`}>
        Full-stack MERN Developer with 2 years of experience building
        comprehensive web applications using MERN. Proficient in JavaScript,
        responsive design, and RESTful API development with strong focus on user
        experience and performance optimization. Skilled in database design,
        state management with Redux, and frontend frameworks including Bootstrap
        and Tailwind CSS.
      </p>
    </div>
  );
};

export default About;
