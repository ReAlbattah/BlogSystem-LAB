import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AddBlog from './components/AddBlog';
import Navbar from './components/Navbar';
import Blog from './components/Blog'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




const App =()=> {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Navbar />
     <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/add-blog' element={<AddBlog/>}></Route>
    <Route path='/blog/:id' element={<Blog/>}></Route>

     </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
