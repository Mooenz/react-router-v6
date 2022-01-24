import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Inicio from './routes/Inicio';
import Blog from './routes/Blog';
import Post from './routes/Post';
import Contacto from './routes/Contacto';
import NoEncontrada from './routes/NoEncontrada';
import RutaProtegida from './routes/RutaProtegida';
import VerificarUsuario from './components/VerificarUsuario';

import UserProvider from './context/UserProvider';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Post />} />
          <Route path="contacto" element={<Contacto />} />
          <Route
            path="protegida"
            element={
              <VerificarUsuario>
                <RutaProtegida />
              </VerificarUsuario>
            }
          />

          <Route path="*" element={<NoEncontrada />} />
        </Route>
      </Routes>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
