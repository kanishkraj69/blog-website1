import React, { useState, useRef, useEffect } from "react";
import Blogpage from "./Blogpage";
import ModifyBlog from "./ModifyBlog";
import Blog from "../Components/Blog";
import NavBar from "../Components/NavBar";
import './Blog.css';

const Viewblogs = () => {
  // managing states below
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState(() => {
    const storedPosts = localStorage.getItem("blogList");
    return storedPosts ? JSON.parse(storedPosts) : [];
  });
 
  // const [allPosts, setAllPosts] = useState([]) // can also be used
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  const getTitle = useRef();
  const getContent = useRef();

  useEffect(() => {
    localStorage.setItem('blogList', JSON.stringify(allPosts));
  }, [allPosts]);

  //accepting title in state by user input
  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
  };

  //accepting content/description in state by user input
  const savePostContentToState = (event) => {
    setContent(event.target.value);
  };
  // function 3 (to save title and content in allPosts state)
  const savePost = (event) => {
    event.preventDefault();
    const id = Date.now();
    const  username = localStorage.getItem("currentuser")

    setAllPosts([...allPosts, { title, content, id, username, likes:0, dislikes:0,comment:[]}]);
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  // function 4 (toggle create new post visibility)
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  // function 5 (toggle post editing)
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  };

  // function 6 (to edit posts)
  const editPost = (id) => {
    setEditPostId(id);
    toggleModifyPostComponent();
  };

  // function 7 (to update the posts)
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }

      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };

  // function to update likes & dislikes
  const updatedetails = (id,islike,isdislike,comment) => {
    const updatedetails = allPosts.map((eachPost) => {
      if (eachPost.id === id) {
        return {
          ...eachPost,
          likes: islike?eachPost.likes+1: eachPost.likes,
          dislikes: isdislike?eachPost.dislikes+1: eachPost.dislikes,
          comment: (!islike && !isdislike)?[...eachPost.comment,comment]:[...eachPost.comment]
        };
      }

      return eachPost;
    });
    setAllPosts(updatedetails);
  };

  // function 8 (to delete posts)
  const deletePost = (id) => {
    const modifiedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };

  if (isCreateNewPost) {
    return (
      <>
        <Blogpage
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
      </>
    );
  } else if (isModifyPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    })

    return (
      <>
        <ModifyBlog
          title={post.title}
          content={post.content}
          updatePost={updatePost}
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          toggleCreateNewPost={toggleCreateNewPost}
        />
      </>
    );
  }

  return (
    <>
      <NavBar/>
      <h1>BLOGS</h1>
      {!allPosts.length ? (
        <div>
          <h1>There are no posts yet.</h1>
        </div>
      ) : (
        allPosts.map((eachPost) =>{
        return (
          <Blog
            id={eachPost.id}
            key={eachPost.id}
            title={eachPost.title}
            author = {eachPost.username}
            updatedetails = {updatedetails}
            content={eachPost.content}
            editPost={editPost}
            deletePost={deletePost}
            Like={eachPost.likes}
            DisLike={eachPost.dislikes}
            Comments={eachPost.comment}
          />
        )})
      )}
      <button
        className="button-23"
        onClick={toggleCreateNewPost}
      >
        Create New
      </button>
    </>
  );
};
export default Viewblogs;