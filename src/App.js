import Footer from './Component/Layout/Footer';
import Header from './Component/Layout/Header';
import Hero from './Component/Hero';
import ShoppingCart from './Component/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import Shop from './Component/Shop';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
