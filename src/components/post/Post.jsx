import React from 'react';
import Author from '../author/Author';
import './style.scss';

const Post = props => {
  const { title, body, updatedAt, createdAt, author, imageUrl, tags } = props;
  return (
    <div className="post">
      <div className="post-first">
        <div className="post-infos">
          <span className="post-title">{title}</span>
          <span className="post-date">{`created ${createdAt.toUTCString()}`}</span>
          <span className="post-date">{`updated ${updatedAt.toUTCString()}`}</span>
          <span className="post-tags">
            <i class="fa fa-tags"></i>
            {tags}
          </span>
        </div>
        <Author {...author} />
      </div>
      <div className="post-second">
        <img src={imageUrl} alt="" />
        <div>
          <p className="post-body">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
