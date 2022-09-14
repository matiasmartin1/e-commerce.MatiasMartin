import './App.css';
import NavbarComp from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/itemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import Cart from './components/Cart'
import CartContextProvider from './context/CartContext';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavbarComp />
        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path='/category/:categoryId' element={<ItemListConteiner />} />
          <Route path='/item/:id' element={<ItemDetailConteiner />} />
          <Route path='/cart' element={<Cart />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>

  );
}

export default App;
/* 
<NavbarComp/>
<ItemListConteiner texto={'lorem'}/> */