import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './views/Home'
import Contacto from './views/Contacto'



import  './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App=() => {

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App
