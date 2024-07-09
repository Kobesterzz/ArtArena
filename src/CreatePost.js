// CreatePost.js
import React, { useState } from 'react';
import './CreatePost.css'; // Replace with your CSS file name

function CreatePost({ addPost }) {
    const [postContent, setPostContent] = useState('');
    const [image, setImage] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (postContent.trim()) {
        const newPost = {
          id: Date.now(),
          username: 'current_user', // Replace with the actual username
          imageUrl: image ? URL.createObjectURL(image) : 'https://via.placeholder.com/600',
          description: postContent,
        };
        addPost(newPost);
        setPostContent('');
        setImage(null);
      }
    };
  
    const handleImageChange = (e) => {
      setImage(e.target.files[0]);
    };
  
    return (
      <div className="create-post-page">
        <div className="create-post-container">
          <h2>Create Post</h2>
          <form className="post-form" onSubmit={handleSubmit}>
            <label htmlFor="postContent">Post Content:</label>
            <textarea
              id="postContent"
              name="postContent"
              rows="4"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              required
            ></textarea>
            <input type="file" onChange={handleImageChange} />
            <button type="submit">Create Post</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default CreatePost;