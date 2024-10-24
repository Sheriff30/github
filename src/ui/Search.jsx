import { useContext, useRef } from "react";
import searchIcon from "../assets/icon-search.svg";
import UserContext from "../context/UserContext";
import toast from "react-hot-toast";

function Search() {
  const userRef = useRef(null);
  const { setData, setStatus, setError } = useContext(UserContext);

  async function onSubmit(e) {
    e.preventDefault();
    const newUser = userRef.current.value.trim();
    if (!newUser) return;

    setStatus("loading");
    setError(null);

    try {
      const apiRes = await fetch(`https://api.github.com/users/${newUser}`);
      if (!apiRes.ok) {
        throw new Error(`User not found`);
      }
      const userData = await apiRes.json();

      setData(userData);
      setStatus("success");
      toast.success("User Found", {
        className: "toast-success",
      });
    } catch (err) {
      toast.error(err.message, {
        className: "toast-error",
      });
      setError(err.message);
      setStatus("error");
    }

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
