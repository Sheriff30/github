/* eslint-disable react/prop-types */
function Search({ onSubmit, userRef }) {
  return (
    <form className="searchForm" action="" onSubmit={onSubmit}>
      <span className="search-icon">
        <img src="/src/assets/icon-search.svg" alt="search icon" />
      </span>
      <input type="text" placeholder="Search GitHub username…" ref={userRef} />
      <div className="form-group">
        <div className="error">No results </div>

        <button className="btn">Search</button>
      </div>
    </form>
  );
}

export default Search;
