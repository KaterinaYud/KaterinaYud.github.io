import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Basket from './pages/Basket.jsx'
import Orders from './pages/Orders.jsx'
import Feedback from './pages/Feedback.jsx'  
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/basket" element={<ProtectedRoute> <Basket /> </ProtectedRoute>}/>
        <Route path="/orders" element={<ProtectedRoute> <Orders /> </ProtectedRoute>} />
        <Route path="/feedback" element={<Feedback />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App;
