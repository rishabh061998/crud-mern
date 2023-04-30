
import './App.css';
import AddUser from './components/AddUser';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import EditUsers from './components/EditUsers';
import CrudOperation from './components/CrudOperation';
import {BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<CrudOperation></CrudOperation>}/>
    <Route path='/add' element={<AddUser></AddUser>}/>
    <Route path='/all' element={<AllUsers></AllUsers>}/>
    <Route path='/edit/:id' element={<EditUsers></EditUsers>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
