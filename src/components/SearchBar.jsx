function SearchBar({ searchQuery, onSearchChange }) {
    return (
      <label>
        Search products
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