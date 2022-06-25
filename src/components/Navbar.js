import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


const Navbar= ()=> {
  return (
  <nav class="nav  bg-light  fixed-top  ">
  <Link to={"/"} class="nav-link active" aria-current="page" >Home</Link>
  <Link to={"/about"} class="nav-link" >About us</Link>
  <Link to={"/contact"} class="nav-link" >Contact</Link>
</nav>
)

}

export default Navbar;
