import './App.css';
import NavbarComp from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/itemListConteiner';

function App() {
  return (
    <div>
      <NavbarComp/>
      <ItemListConteiner texto={'lorem'}/>
    </div>
  );
}

export default App;
