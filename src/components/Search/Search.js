import search from './Search.svg';
import './Search.css';

function Search({ fetchUser }) {
  let handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let username = event.target.value;
      fetchUser(username);
    }
  };

  return (
    <div className="search">
      <img className="searchImage" src={search} alt="search icon" />
      <input
        id="searchInput"
        className="searchInput"
        type="text"
        placeholder="Enter GitHub username"
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

export default Search;
