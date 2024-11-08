import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Alugar from './pages/Alugar';
import RegistroItens from './pages/RegistroItens';
import Principal from './pages/Principal';
import Footer from './components/Footer';
import Perfil from './pages/Perfil';
import Pedidos from './pages/Pedidos';
import Pagamento from './pages/Pagamento'
import NaoEncontrada from './pages/NaoEncontrada';
import { AuthProvider } from './components/AuthContext/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function Layout() {
    const location = useLocation();
    const hideHeaderFooter = location.pathname === '/';

    return (
        <div>
            {!hideHeaderFooter && <Header />}
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='registroitens' element={<PrivateRoute element={<RegistroItens />} />} />
                <Route path='principal' element={<PrivateRoute element={<Principal />} />} />
                <Route path='pagamento/:id' element={<PrivateRoute element={<Pagamento/>} /> } />
                <Route path='alugar' element={<PrivateRoute element={<Alugar />} />} />
                <Route path='perfil' element={<PrivateRoute element={<Perfil />} />} />
                <Route path='pedidos' element={<PrivateRoute element={<Pedidos />} />} />
                <Route path='*' element={<NaoEncontrada />} />
            </Routes>
            {!hideHeaderFooter && <Footer />}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Layout />
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
