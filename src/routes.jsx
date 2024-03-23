
import Navbar from './components/shared/Navbar';
import Home from './components/Home'
import Accordian from './components/accordian';
import RandomColorGen from './components/random-color-generator';
import StarRating from './components/starRating';
import ImageSlider from './components/ImageSlider';
import LoadMore from './components/LoadMore';
import TreeView from './components/tree-view';
import { MenuList as menu } from './components/tree-view/data';
import QRCodeGenerator from './components/QRCodeGenerator';
import ScrollIndicator from './components/ScrollIndicator';
import Modal from './components/Modal/Modal';
import GitHubProfileFinder from './components/GitHubProfileFinder';
import GithubProfileViewer from './components/Re-Do/GithubProfileViewer';


export const routes = [
  { path: '/', element: <Home project_count={5}/> },
  { path: '/accordian', element: <Accordian /> },
  { path: '/color', element: <RandomColorGen /> },
  { path: '/rating', element: <StarRating numberOfStar={10}/> },
  { path: '/slider', element: <ImageSlider url={'https://picsum.photos/v2/list'}
  page ={'1'}
  limit={'5'} /> },
  { path: '/load-more', element: <LoadMore/>},
  { path: '/tree-view', element: <TreeView menu={menu}/>},
  { path: '/qr-code', element: <QRCodeGenerator/>},
  { path: '/modal', element: <Modal/>},
  { path: '/scroll-indicator', element: <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>},
  // { path: '/git', element: <GitHubProfileFinder url={'https://dummyjson.com/products?limit=100'}/>},
  { path: '/git-search', element: <GithubProfileViewer/>},
];

