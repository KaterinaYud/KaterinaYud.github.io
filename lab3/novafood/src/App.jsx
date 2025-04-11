import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Basket from './pages/Basket.jsx'
import Orders from './pages/Orders.jsx'
import Feedback from './pages/Feedback.jsx'  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/feedback" element={<Feedback />} /> 
      </Routes>
    </Router>
  )
}

export default App;
