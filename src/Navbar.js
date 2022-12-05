import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
<nav className="navbar">
    <h2 className='title'><Link to="/">The GHADBAN Blog</Link></h2>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" className='nav-link' >New Blog</Link>
    </div>
</nav>

     );
}
 
export default Navbar;

