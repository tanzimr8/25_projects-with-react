import './App.css';
import Navbar from './components/shared/Navbar';
import Home from './components/Home';
import Accordian from './components/accordian';
import RandomColorGen from './components/random-color-generator';
import StarRating from './components/starRating';
import ImageSlider from './components/ImageSlider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/accordian' element={<Accordian/>} />
          <Route path='/color' element={<RandomColorGen/>} />
          <Route path='/rating' element={<StarRating numberOfStar={10}/>} />
          <Route path='/slider' element={<ImageSlider url={'https://picsum.photos/v2/list'} page ={'1'} limit={'5'}/>} />
      </Routes>
      </>
  );
}

export default App;
