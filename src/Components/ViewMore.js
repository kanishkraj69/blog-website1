import React from 'react';
import './ViewMore.css'

const ViewMore = ({ isOpen, onClose, likes, dislikes, comments }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
            <div className='panal-1'>
                <h3>Likes: {likes}</h3>
                <h3>Dislikes: {dislikes}</h3>
            </div>
            <hr/>
          <h2>Comments:</h2>
          <div className='panal-comments'>
            <table>
                <tbody>
                    {comments.map((item) => (
                    <tr >
                        <td>{item}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

export default ViewMore
