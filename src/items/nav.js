import React from 'react';
import navLogoBlack from '../icons/nav_logo_black.png';
import '../style/Nav.css'; // 스타일 파일 불러오기

const Nav = ({ onNavigate, currentPage }) => {
  return (
    <div className="nav-container">
      <img 
        src={navLogoBlack}
        alt="울창 로고"
        className="nav-logo"
        onClick={() => onNavigate('home')}
      />
      <div className="nav-menu">
        <span 
          className={`nav-item ${currentPage === 'people' ? 'active' : ''}`}
          onClick={() => onNavigate('people')}
        >
          People
        </span>
        <span 
          className={`nav-item ${currentPage === 'works' ? 'active' : ''}`}
          onClick={() => onNavigate('works')}
        >
          Works
        </span>
      </div>
    </div>
  );
};

export default Nav;
