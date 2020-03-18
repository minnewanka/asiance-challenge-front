import React from 'react';
import './style.scss';
import { MENU } from '../../utils/constants';
import Scrollspy from 'react-scrollspy';
import './style.scss';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
  const currentRoute = props.location.pathname.substring(1);
  return (
    <div className="navbar">
      <Scrollspy items={MENU} componentTag="div" currentClassName="activeItem">
        <div>
          <h1>THE BLOG </h1>
        </div>
        <div className="navbar-menu">
          {MENU.map(item => (
            <div
              className={`navbar-section ${
                item === currentRoute ? 'active-section' : ''
              }`}
            >
              <Link className="route" to={item}>
                {item.toUpperCase()}
              </Link>
            </div>
          ))}
        </div>
      </Scrollspy>
    </div>
  );
};

export default withRouter(Navbar);
