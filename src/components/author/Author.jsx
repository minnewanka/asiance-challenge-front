import React from 'react';
import './style.scss';

const Author = props => {
  const { name, avatar, role, location } = props;
  return (
    <div className="author">
      <img className="author-avatar" src={avatar} alt="" />
      <div className="author-infos">
        <span className="author-infos--primary">{name}</span>
        <span className="author-infos--secondary">{role}</span>
        <span className="author-infos--secondary">{location}</span>
      </div>
    </div>
  );
};

export default Author;
