import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import Search from './components/Search';
import View from './components/View';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='blog' element={<BlogPost/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='view' element={<View/>}/>
      <Route path='delete' element={<Delete/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
