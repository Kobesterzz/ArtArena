// CreatePost.js
import React, { useState } from 'react';
import './CreatePost.css'; // Replace with your CSS file name


function ImageUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = () => {
        // Handle uploading logic here (e.g., send selectedFile to server)
        console.log(selectedFile);
    };

    return (
        <div className="image-upload-container">
            <input type="file" className="image-upload-input" onChange={handleFileChange} />
            <label className="image-upload-label" onClick={handleUpload}>Upload Image</label>
        </div>
    );
}

function CreatePost() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="create-post-page">
            <div className="create-post-container">
                <h2>Create Post</h2>
                <form className="post-form" onSubmit={handleSubmit}>
                    <label htmlFor="postContent">Post Content:</label>
                    <textarea id="postContent" name="postContent" rows="4" required></textarea>
                    <ImageUpload />
                    <button type="submit">Create Post</button>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;
