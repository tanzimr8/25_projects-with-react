import './App.css';
import Accordian from './components/accordian';
import RandomColorGen from './components/random-color-generator';
import StarRating from './components/starRating';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <>
    {/* <Accordian/>
    <RandomColorGen/> */}
    <StarRating numberOfStar={10}/>
    <ImageSlider
      url={'https://picsum.photos/v2/list'}
      page ={'1'}
      limit={'5'}
    />
    </>
  );
}

export default App;
