import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


// import NavBAr1 from './constants/NavBar1';
import Homepage from './components/Homepage';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Homepage/>} />
        <Route path="/post/:objectID" element={<PostDetail/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
