import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const ModifyBlog = (props) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
  return (
    <div className='blog-container'>
        <h1>Modify Blog</h1>
      <form>
        <input type="text"
        className='title' 
        placeholder="Title" 
        onChange={props.savePostTitleToState}
        required
        defaultValue={props.title} />
        <textarea type="text" 
        className='content'
        placeholder="Tell Your Story" 
        required
        onChange={props.savePostContentToState}
        defaultValue={props.content} />
        <div className='button-panel'>
            <button onClick={handleGoBack} >Back</button>
            <button title="update post" onClick={props.updatePost}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default ModifyBlog
