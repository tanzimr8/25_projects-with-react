import './App.css';
import Accordian from './components/accordian';
import RandomColorGen from './components/random-color-generator';
import StarRating from './components/starRating';

function App() {
  return (
    <>
    {/* <Accordian/>
    <RandomColorGen/> */}
    <StarRating numberOfStar={10}/>
    </>
  );
}

export default App;
