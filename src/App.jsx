import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import logo from './assets/images/logo.jpg';
function App() {

  const links = [
    {
      id: 1,
      title: 'Home',
      path: '/'
    },
    {
      id: 2,
      title: 'About',
      path: '/about'
    },
    {
      id: 3,
      title: 'Shop',
      path: '/shop'
    },
    {
      id: 4,
      title: 'Contact Us',
      path: '/contact-us'
    },
  ]

  const [products, setProducts] = useState([]);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) {
          throw new Error('Error Fetching Products');
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        SetError(err.message)
      }
    }

    fetchProducts();
  }, []);


  return (
    <Router>
      <Header links={links} logo={logo} />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
