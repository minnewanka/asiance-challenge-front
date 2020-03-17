import React from 'react';
import Post from '../../components/post/Post';

const Posts = ({ posts }) => {
  return (
    <div className="container">
      {posts && posts.map(post => <Post {...post} />)}
    </div>
  );
};

export default Posts;
