import logo from "../assets/github-logo.png";

function NoData() {
  return (
    <div className="no-data">
      <div className="logo-img">
        <img src={logo} alt="github logo" />
      </div>
      <div>Enter a GitHub username to view user profiles</div>
    </div>
  );
}

export default NoData;
