import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Home from './components/Home/Home';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          {/* Definir las rutas */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/Formulario" element={<Formulario/>}/>
          <Route path="/DescargarCv" element={<DescargarCv/>}/>
          {/* Ruta para páginas no encontradas */}
          {/* <Route path="*" element={<NotFound />} /> */} 
        </Routes>
      </Router>
    </div>
  )
}

export default App
