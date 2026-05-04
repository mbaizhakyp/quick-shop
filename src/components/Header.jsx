import SearchBar from "./SearchBar"

function Header({ searchQuery, onSearchChange }) {
    return (
      <header className="app-header">
        <h1>Quick Shop</h1>

        <SearchBar 
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
        />
      </header>
    )
  }

  export default Header
