import { useContext, useEffect } from "react";
import darkModeIcon from "../assets/icon-moon.svg";
import lightModeIcon from "../assets/icon-sun.svg";
import DarkModeContext from "../context/DarkModeContext";

function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <div className="logo">devfinder</div>
      <div className="themeMode" onClick={toggleDarkMode}>
        <span>{darkMode ? "Light" : "Dark"}</span>
        <span>
          <img src={darkMode ? lightModeIcon : darkModeIcon} alt="Theme icon" />
        </span>
      </div>
    </header>
  );
}

export default Header;
