import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route apth="/">
            <Route index element={<Login/>}/>
            <Route path="home" element={<Home/>}/>
            <Route  path="details/:id" element={<Detail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
