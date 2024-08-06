import { Route, Routes } from 'react-router-dom';
import Home from './PAGES/Home/Home';
import Login from './PAGES/Login/Login';
import Flowchart from './COMPONENTS/flowchart';
import MainFlow from './PAGES/Flows/MainFlow/Flows';
import './App.css';

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Home/>} />
          <Route path='/flowchart' element={<MainFlow />} />
        </Routes>
    </>
  );
}

export default App;
