import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

function Inicio() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1 className="fw-bold text-center">Inicio</h1>
      <p className="text-center">
        {user ? (
          <>
            Hola Manu, estas conectado 😎 y puedes ingresar {}
            <Link className="text-danger" to="/protegida">
              aquí
            </Link>
          </>
        ) : (
          'Desconectado 🤔'
        )}
      </p>
    </div>
  );
}

export default Inicio;
