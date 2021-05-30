import logo from './Logo.svg';
import './Header.css';
import Search from '../Search/Search';

function Header({ fetchUser }) {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <Search fetchUser={fetchUser} />
    </header>
  );
}

export default Header;
