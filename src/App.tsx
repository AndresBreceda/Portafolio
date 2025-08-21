import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Home from './Pages/Home/Home';
import Pronto from './Pages/Home/Pronto/Pronto';
import Logipack from './Pages/Home/Logipack/Logipack';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          {/* Definir las rutas */}
          <Route path="/" element={<Home />} />
           <Route path="/ProntoCv" element={<Pronto/>}/>
           <Route path="/Logipack" element={<Logipack/>}/>

          {/* Ruta para páginas no encontradas */}
          {/* <Route path="*" element={<NotFound />} /> */} 
        </Routes>
      </Router>
    </div>
  )
}

export default App
