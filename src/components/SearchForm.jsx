import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchForm() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return;
    }
    e.target.submit();
    setQuery("");
  };

  return (
    <form
      method="get"
      action="https://encrypted.google.com/search"
      target="_blank"
      className="search-form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="as_sitesearch" value="selenium.dev" />
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        name="as_q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
}
