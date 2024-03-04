
import Navbar from './components/shared/Navbar';
import Accordian from './components/accordian';
import RandomColorGen from './components/random-color-generator';
import StarRating from './components/starRating';
import ImageSlider from './components/ImageSlider';

const routes = [
  { path: '/accordian', component: <Accordian /> },
  { path: '/color', component: <RandomColorGen /> },
  { path: '/rating', component: <StarRating numberOfStar={10}/> },
  { path: '/slider', component: <ImageSlider url={'https://picsum.photos/v2/list'}
  page ={'1'}
  limit={'5'} /> },
];

export default routes;