import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './pages/Login'
import Alugar from './pages/Alugar'
import Vender from './pages/Vender'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='vender' element={<Vender/>} />
          <Route path='login' element={<Login />} />
          <Route path='alugar' element={<Alugar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
