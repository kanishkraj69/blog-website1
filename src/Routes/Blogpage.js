import React from 'react';
import { useNavigate} from 'react-router-dom';
import './Blog.css';
const Blogpage = (props) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/home');
    }
    const handleGoViewPage = () => {
        navigate('/viewblog');
    }

  return (
    <div className='blog-container'>
      <form onSubmit={props.savePost}>
        <input type="text"
        className='title' 
        placeholder="Title" 
        onChange={props.savePostTitleToState}
        required
        ref={props.getTitle} />
        <textarea type="text" 
        className='content'
        placeholder="Tell Your Story" 
        required
        onChange={props.savePostContentToState}
        ref={props.getContent} />
        <div className='button-panel'>
            <button onClick={handleGoBack}>Back</button>
            <button onClick={handleGoViewPage} >Save</button>
        </div>
      </form>
    </div>
  )
}

export default Blogpage
