import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Alugar from './pages/Alugar'
import RegistroItens from './pages/RegistroItens'
import Principal from './pages/Principal'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='registroitens' element={<RegistroItens/>} />
          <Route path='login' element={<Login />} />
          <Route path='alugar' element={<Alugar />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
