import './App.css';
import NavbarComp from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/itemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetailConteiner';
import { CartContextProvider } from './components/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavbarComp />
        <Routes>
          <Route path='/' element={<ItemListConteiner />} />
          <Route path={'/category/:categoryId'} element={<ItemListConteiner />} />
          <Route path={'/item/:id'} element={<ItemDetailConteiner />} />
          '      </Routes>
      </CartContextProvider>
    </BrowserRouter>

  );
}

export default App;
/* 
<NavbarComp/>
<ItemListConteiner texto={'lorem'}/> */