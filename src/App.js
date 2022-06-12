import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import RequiredAuth from './hoc/RequiredAuth';
import Todo from './pages/Todo';
// import RequiredAuth from './hoc/RequiredAuth';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<RequiredAuth><Todo></Todo></RequiredAuth>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
