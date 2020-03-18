import React from 'react';
import Author from '../author/Author';
import './style.scss';
import formatDateKR from '../../utils/utils';

const Post = props => {
  const { title, body, updatedAt, createdAt, author, imageUrl, tags } = props;
  return (
    <div className="post">
      <div className="post-top">
        <div className="post-infos">
          <span className="post-title">{title}</span>
          <span className="post-date">{`created ${formatDateKR(
            createdAt,
          )}`}</span>
          <span className="post-date">{`updated ${formatDateKR(
            updatedAt,
          )}`}</span>
          <span className="post-tags">
            <i class="fa fa-tags"></i>
            {tags}
          </span>
        </div>
        <Author {...author} />
      </div>
      <div className="post-bottom">
        <img src={imageUrl} alt="" />
        <div>
          <p className="post-body">{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
