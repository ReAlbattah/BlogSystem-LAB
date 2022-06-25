import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Blog = () => {

  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const getBlog = async () => {
      const request = await fetch(`http://localhost:8080/api/v1/blog/${id}`);
      const data = await request.json();
      if (request.status === 200) {
        setTitle(data.title);
        setBody(data.body);
      }
    };
    getBlog();
  }, []);

  return (
    <div className="">
       <h1 className="mt-3">{title}</h1>

        <textarea value={body} class="form-control" placeholder="Enter your body ..." rows={10}  readOnly></textarea>
       

        <button
        onClick={onClick}
        type='button'
        className='btn btn-secondary btn-lg mt-3 w-100'
      >
        Back Button
      </button>
    </div>
  );
};

export default Blog;
