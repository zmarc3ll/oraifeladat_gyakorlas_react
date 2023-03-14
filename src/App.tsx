import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Bemutatkozas from './components/pages/bemutatkozas';
import Main from './components/pages/main';
import Rolunk from './components/pages/rolunk';

function App() {
  return (
    <><Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/bemutatkozas' element={<Bemutatkozas/>}></Route>
      <Route path='/rolunk' element={<Rolunk/>}></Route>
    </Routes>

    <Footer></Footer>
    </>
  );
}

export default App;
