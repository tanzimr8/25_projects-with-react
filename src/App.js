import './App.css';
import Navbar from './components/shared/Navbar';
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
