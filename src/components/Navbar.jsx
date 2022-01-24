import { NavLink, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

function Navbar() {
  const { user, signIn, signOut } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-black">
      <div className="container my-2">
        <Link to="/">
          {user ? (
            <button className="btn btn-danger" onClick={signOut}>
              Cerrar Sesión
            </button>
          ) : (
            <button className="btn btn-primary" onClick={signIn}>
              Iniciar Sesión
            </button>
          )}
        </Link>
        <NavLink className="btn btn-outline-danger text-white" to="/">
          Inicio
        </NavLink>
        <NavLink className="btn btn-outline-success text-white" to="/blog">
          Blog
        </NavLink>
        <NavLink className="btn btn-outline-warning text-white" to="/contacto">
          Contacto
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
