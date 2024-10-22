import { useContext, useRef } from "react";
import useUser from "../services/useUser";
import UserContext from "../context/UserContext";

function Search() {
  const { setUser, user } = useContext(UserContext);
  const { isError } = useUser(user);

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
        <img src="/src/assets/icon-search.svg" alt="search icon" />
      </span>
      <input
        type="text"
        placeholder="Search GitHub username…"
        ref={userRef}
        maxLength={40}
      />
      <div className="form-group">
        <div className={`error ${isError ? "show-error" : ""}`}>
          No results{" "}
        </div>

        <button className="btn">Search</button>
      </div>
    </form>
  );
}

export default Search;
