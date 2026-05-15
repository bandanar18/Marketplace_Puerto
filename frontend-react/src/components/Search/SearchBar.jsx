import { useState } from 'react';
import { Search } from 'lucide-react';
import './Search.css';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <div className="search-input-wrapper">
          <label>¿Qué buscas?</label>
          <input 
            type="text" 
            placeholder="Almacenaje, transporte, aduana..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="search-divider"></div>
        <div className="search-input-wrapper">
          <label>¿Dónde?</label>
          <input type="text" placeholder="Cualquier puerto" />
        </div>
        <button type="submit" className="search-button">
          <Search size={16} color="white" strokeWidth={3} />
        </button>
      </form>
    </div>
  );
}
