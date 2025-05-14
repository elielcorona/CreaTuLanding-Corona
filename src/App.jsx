import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Estilos globales
import './styles/theme-dark.css'; // Usa theme-light.css si prefieres

// Componentes
import NavBar from './components/NavbarUsuario';
import ItemListContainer from './components/ItemListContainer';

// Páginas
import PrincipalUsuario from './pages/usuarios/PrincipalUsuario';
import ProductosUsuario from "./pages/usuarios/ProductosUsuario";


function App() {
  return (
    <Router>
      {/* Barra de navegación visible en todas las rutas */}
      <NavBar />

      {/* Contenido según la ruta */}
      <Routes>
        <Route path="/" element={ <div className="contenido-ajustado"> <PrincipalUsuario /></div>}/>
        <Route path="/productos" element={<ProductosUsuario />} />        
        {/* Puedes agregar más rutas aquí si lo necesitas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
