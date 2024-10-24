import { useContext, useRef } from "react";
import searchIcon from "../assets/icon-search.svg";
import UserContext from "../context/UserContext";
import toast from "react-hot-toast";

function Search() {
  const userRef = useRef(null);
  const { setData, setError, setIsLoading } = useContext(UserContext);

  async function onSubmit(e) {
    e.preventDefault();
    const newUser = userRef.current.value.trim();
    if (!newUser) return;

    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const apiRes = await fetch(`https://api.github.com/users/${newUser}`);

      if (!apiRes.ok) {
        throw new Error(`User not found`);
      }

      const userData = await apiRes.json();

      setData(userData);
      setIsLoading(false);
      toast.success("User Found", {
        className: "toast-success",
      });
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      toast.error(err.message, {
        className: "toast-error",
      });
    } finally {
      userRef.current.value = "";
    }
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
