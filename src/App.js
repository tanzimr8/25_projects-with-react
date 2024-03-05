import './App.css';
import Navbar from './components/shared/Navbar';
import Home from './components/Home';
import Accordian from './components/accordian';
import RandomColorGen from './components/random-color-generator';
import StarRating from './components/starRating';
import ImageSlider from './components/ImageSlider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {routes} from './routes';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          {routes.map((route,index)=>{
          return <Route path={route.path} element={route.element} key={index} />
          })}
      </Routes>
      </>
  );
}

export default App;
