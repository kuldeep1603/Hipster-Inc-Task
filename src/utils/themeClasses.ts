import type { Theme } from "../redux/slice/themeSlice";

export const getHeaderClass = (theme: Theme) => {
  switch (theme) {
    case "light":
      return "bg-white text-black shadow";
    case "dark":
      return "bg-gray-900 text-white shadow";
    case "colorful":
      return "bg-gradient-to-r from-pink-500 to-purple-600 text-white font-pacifico animate-pulse";
  }
};

export const getCardClass = (theme: Theme) => {
  switch (theme) {
    case "light":
      return "bg-light_white text-black border ";
    case "dark":
      return "bg-gray-800 text-white border border-gray-700 ";
    case "colorful":
      return "bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-pacifico animate-fadeIn";
  }
};

export const getLayoutClass = (theme: Theme) => {
  return theme === "dark"
    ? "flex flex-row min-h-screen bg-gray-900"
    : "md:px-10 px-4 py-4";
};

export const getFontClass = (theme: Theme) => {
  switch (theme) {
    case "light":
      return "font-Roboto";
    case "dark":
      return "font-Baskerville";
    case "colorful":
      return "font-Fredoka";
  }
};

export const getHeadingTextClass = (theme: Theme) => {
  switch (theme) {
    case "light":
      return "text-primary";
    case "dark":
      return "text-white";
    case "colorful":
      return "text-pink-500";
  }
};

export const getHeadingClass = (theme: Theme) => {
  switch (theme) {
    case "light":
      return "text-black font-bold";
    case "dark":
      return "text-white font-bold";
    case "colorful":
      return "text-black font-bold";
  }
};

export const getborderpattern = (theme: Theme) => {
  switch (theme) {
    case "light":
      return "border-primary";
    case "dark":
      return "border-primary";
    case "colorful":
      return "border-pink-500";
  }
};

export const getColor = (theme: Theme) => {
  switch (theme) {
    case "light":
      return "text-black";
    case "dark":
      return "text-white";
    case "colorful":
      return "text-black";
  }
};

export const getBgColor = (theme: Theme) => {
  switch (theme) {
    case "light":
      return "bg-white";
    case "dark":
      return "bg-black";
    case "colorful":
      return "bg-transparent";
  }
};
