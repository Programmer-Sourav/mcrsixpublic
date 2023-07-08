import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/details/:id" element={<RestaurantDetails/>}>RestaurantDetails</Route>
      </Routes>
     
    </div>
  );
}

export default App;
