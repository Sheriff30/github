import darkModeIcon from "../assets/icon-moon.svg";

function Header() {
  return (
    <header>
      <div className="logo">devfinder</div>
      <div className="themeMode">
        <span>Dark</span>
        <span>
          <img src={darkModeIcon} alt="Theme icon" />
        </span>
      </div>
    </header>
  );
}

export default Header;
