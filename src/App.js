import './App.css';
import NavbarComp from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/itemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailConteiner from './components/ItemDetailConteiner';

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<ItemListConteiner/>} />
        <Route path='/category/:id' element={<ItemListConteiner />} />
        <Route path='/item/:id' element={<ItemDetailConteiner />} />
'      </Routes>
    </BrowserRouter>

  );
}

export default App;
/* 
<NavbarComp/>
<ItemListConteiner texto={'lorem'}/> */