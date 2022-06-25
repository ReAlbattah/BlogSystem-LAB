import { useNavigate } from "react-router-dom";
import AddBlog from "./AddBlog";
import { useEffect,useState } from "react";
import BlogList  from "./BlogList";

const Home = ()=> {

  const navigate = useNavigate();
  const[blogList,setBlogList] = useState([]);

  const onClick = (e) => {
  navigate('/add-blog');
  };
useEffect(()=>{

const getData = async ()=>{
    const request = await fetch(`http://localhost:8080/api/v1/blog`);
    const data = await request.json();

    setBlogList(data);
}

getData();
},[])

  return (
  <>
    <div class="">
      <h1 class="text-center mb-5">Blog System </h1>

      <BlogList blogList={blogList} />
      <button onClick={onClick} class="btn btn-secondary my-3  w-100  text-center" type="button">Add New Blog</button>
      
</div>
</>
  )
}

export default Home;
