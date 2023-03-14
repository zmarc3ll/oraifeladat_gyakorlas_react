import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Bemutatkozas from './components/pages/bemutatkozas';
import Main from './components/pages/main';
import Kapcsolat from './components/pages/kapcsolat';

function App() {
  return (
    <><Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/bemutatkozas' element={<Bemutatkozas/>}></Route>
      <Route path='/kapcsolat' element={<Kapcsolat/>}></Route>
    </Routes>

    <Footer></Footer>
    </>
  );
}

export default App;
