import { useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import searchIcon from "../assets/icon-search.svg";

function Search() {
  const { setUser } = useContext(UserContext);

  const userRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    const newUser = userRef.current.value;
    if (!newUser) return;

    setUser(newUser);

    userRef.current.value = "";
  }

  return (
    <form className="searchForm" action="" onSubmit={onSubmit}>
      <span className="search-icon">
        <img src={searchIcon} alt="search icon" />
      </span>
      <input
        type="text"
        placeholder="Search GitHub username…"
        ref={userRef}
        maxLength={40}
      />
      <div className="form-group">
        <button className="btn">Search</button>
      </div>
    </form>
  );
}

export default Search;
