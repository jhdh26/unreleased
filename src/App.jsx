import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Alugar from './pages/Alugar'
import RegistroItens from './pages/RegistroItens'
import Principal from './pages/Principal'
import Footer from './components/Footer'
import Perfil from './pages/Perfil'
import Pedidos from './pages/Pedidos'

function Layout() {
  const location = useLocation();

  const hideHeaderFooter = location.pathname === '/';

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='registroitens' element={<RegistroItens />} />
        <Route path='principal' element={<Principal />} />
        <Route path='alugar' element={<Alugar />} />
        <Route path='perfil' element={<Perfil />} />
        <Route path='pedidos' element={<Pedidos />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
