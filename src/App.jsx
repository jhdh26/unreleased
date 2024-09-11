import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Alugar from './pages/Alugar'
import Vender from './pages/Vender'
import Principal from './pages/Principal'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='vender' element={<Vender/>} />
          <Route path='login' element={<Login />} />
          <Route path='alugar' element={<Alugar />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
