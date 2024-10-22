/* eslint-disable react/prop-types */
function Search({ onSubmit, userRef, isError }) {
  console.log(isError);
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
