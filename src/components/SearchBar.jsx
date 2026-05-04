function SearchBar({ searchQuery, onSearchChange }) {
    return (
      <label className="search-bar">
        <span>Search products</span>
        <input
          type="search"
          value={searchQuery}
          onChange={event => onSearchChange(event.target.value)}
          placeholder="Search by title or category"
          />
      </label>
    )
  }

  export default SearchBar
