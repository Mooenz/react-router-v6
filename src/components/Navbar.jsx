import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-black">
      <div className="container my-2">
        <NavLink className='btn btn-outline-danger text-white' to="/">Inicio</NavLink>
        <NavLink className='btn btn-outline-success text-white' to="/blog">Blog</NavLink>
        <NavLink className='btn btn-outline-warning text-white' to="/contacto">Contacto</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
