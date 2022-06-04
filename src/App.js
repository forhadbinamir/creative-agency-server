import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Contact from './Pages/Home/Contact';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
