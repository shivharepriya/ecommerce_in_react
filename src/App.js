import Footer from './Component/Layout/Footer';
import Header from './Component/Layout/Header';
import Hero from './Component/Hero';
import ShoppingCart from './Component/ShoppingCart';
import { Route, Routes } from 'react-router-dom';
import Shop from './Component/Shop';
import ShopDetail from './Component/ShopDetail';
import Checkout from './Component/Checkout';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shopdetail' element={<ShopDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
