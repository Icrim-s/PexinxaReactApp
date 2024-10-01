import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/products/Products';
import LoginForm from './pages/login/Login';
import RegisterForm from './pages/register/Register';
import CookieCard from './components/CookieCard';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </main>
        <CookieCard />
      </div>
    </Router>
  );
}

export default App;