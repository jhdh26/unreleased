import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element=""/>
          <Route path='login' element={<Login/>}/>
          <Route path='asdasd' element=""/>
          <Route path='dasdasd' element=""/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
