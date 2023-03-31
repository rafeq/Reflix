import '../style/navbar-style.css'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Catalog">Catalog</Link></li>
      </ul>
    );
  }
  export default NavBar;