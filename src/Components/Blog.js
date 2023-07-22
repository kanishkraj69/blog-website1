import React, {useState} from 'react';
import { LuEdit } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillLike, AiFillDislike, AiOutlineComment } from "react-icons/ai";
import './Blog.css';
import ViewMore from './ViewMore';

const Blog = ({ DisLike,Like,Comments,author, id, title, content, editPost, deletePost, updatedetails }) => {
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comment, setComment] = useState();
    const [viewmore, setViewMore] = useState(false);
    const toggleCommentBox = () => {
        setShowCommentBox(!showCommentBox);
      };
    const handleCommentChange = (event) => {
    setComment(event.target.value);
    };
    const handleSubmitComment = () => {
        updatedetails(id, false, false, comment)
        setShowCommentBox(false);
    };
    const handleViewMore = () => {
      setViewMore(true);
    };
  return (
    <div className='blog-card'>
        <section key={id}>
            <div>
                <h2>{title}</h2>
                <div>
                    <span className='edit' title="edit post" onClick={() => editPost(id)}>
                        <LuEdit/>
                    </span>
                    <span className='delete' title="delete post" onClick={() => deletePost(id)}>
                        <RiDeleteBinLine/>
                    </span>
                </div>
            </div>
            <hr></hr>
            <p>{content}</p>
            <div className='lower-panel'>
                <div className='view-details'>
                    <h2>Author: {author}</h2>
                    <button className='button-70' onClick={handleViewMore} >View More</button>
                </div>
                <div className='details'>
                    <p>{Like}</p>
                    <AiFillLike className="like" onClick={() =>updatedetails(id, true, false)}/>
                    <p>{DisLike}</p>
                    <AiFillDislike className="dislike" onClick={() => updatedetails(id, false, true)} />
                    <AiOutlineComment onClick={toggleCommentBox} />
                </div>
            </div>
            {showCommentBox && (
          <div className='comment-box'>
            <textarea
              onChange={handleCommentChange}
              placeholder="Write your comment..."
            />
            <button className='button-87' onClick={handleSubmitComment}>Submit</button>
          </div>
        )}
        </section>
        <ViewMore isOpen={viewmore} onClose={() => setViewMore(false)} likes={Like} dislikes={DisLike} comments={Comments} />
    </div>
  )
}

export default Blog
