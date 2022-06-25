import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';



const AddBlog = ()=>{

    const navigate = useNavigate();
  const onClick = async (e) => {
    const request = await fetch('http://localhost:8080/api/v1/blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    });

    const data = await request.json();

    if (request.status === 201) {
      navigate('/');
    }
  };
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
    return (
        <div className="">
       <h1 className="mt-3">Add New Blog</h1>
       <div className="mb-3">
            <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" className="form-control" placeholder="Enter your title here"/>
        </div>

        <textarea value={body} onChange={(e)=> setBody(e.target.value)}  class="form-control" placeholder="Enter your body ..." rows={10} ></textarea>
        <button onClick={onClick} type="button" className="btn btn-success w-100 mt-3">Add </button>

    </div>

    )


}
export default AddBlog;