import { Routes, Route } from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './components/app/ProtectedRoutes'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductId from './pages/ProductId'
import Purchases from './pages/Purchases'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/product/:id' element={<ProductId />}/>

        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases />}/>
          <Route path='/cart' element={<Cart />}/>        
        </Route>
      </Routes>
    </div>
  )
}

export default App
