import React, { useState } from 'react';
import Nav from '../items/nav';
import peoplePageBg from '../icons/people_page_bg.png';
import peopleImg from '../icons/people.png';
// Founder photos
import srPhoto from '../icons/sr.jpg';
import hyPhoto from '../icons/hy.jpg';
import yjPhoto from '../icons/yj.jpg';
// Team member photos
import sbPhoto from '../icons/sb.jpg';
import tgPhoto from '../icons/tg.jpg';
import smPhoto from '../icons/sm.jpg';
import dgPhoto from '../icons/dg.jpg';
import shPhoto from '../icons/sh.jpg';
// Gallery member photos
import snPhoto from '../icons/sn.jpg';
import sjPhoto from '../icons/sj.jpg';
import mgPhoto from '../icons/mg.jpg';
// Intro photos
import intro1Photo from '../icons/intro_1.JPG';
import intro2Photo from '../icons/intro_2.jpg';
import intro3Photo from '../icons/intro_3.jpg';
import intro4Photo from '../icons/intro_4.JPG';
import intro5Photo from '../icons/intro_5.JPG';
import intro6Photo from '../icons/intro_6.jpg';
import '../style/People.css';

const People = ({ onNavigate }) => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    { name: '이상빈', role: 'Producer', photo: sbPhoto },
    { name: '정태건', role: 'Designer', photo: tgPhoto },
    { name: '김수민', role: 'Project Coordinator', photo: smPhoto },
    { name: '이동건', role: 'Art Coordinator', photo: dgPhoto },
    { name: '윤승현', role: 'Executive Coordinator', photo: shPhoto }
  ];

  const galleryMembers = [
    { name: '유서나', role: 'Artist', photo: snPhoto },
    { name: '윤선재', role: 'Producer', photo: sjPhoto },
    { name: '전민경', role: 'Investment Strategist', photo: mgPhoto },
    { name: '이하민', role: 'Story Miner', photo: peopleImg },
    { name: '서한결', role: '', photo: peopleImg },
    { name: '봄에르덴', role: '', photo: peopleImg },
    { name: '최연희', role: '', photo: peopleImg },
    { name: '김동건', role: 'Developer', photo: peopleImg }
  ];

  return (
    <div className="people-container" style={{ '--bg-image': `url(${peoplePageBg})` }}>
      {/* 네비게이션 바 */}
      <Nav onNavigate={onNavigate} currentPage="people" />

      {/* People 1: 스튜디오 소개 섹션 */}
      <div className="people-section people-intro-section">
        <div className="intro-container">
          {/* 사진들 */}
          <div className="intro-photo intro-photo-1">
            <img src={intro1Photo} alt="intro_1" />
          </div>
          <div className="intro-photo intro-photo-2">
            <img src={intro2Photo} alt="intro_2" />
          </div>
          <div className="intro-photo intro-photo-3">
            <img src={intro3Photo} alt="intro_3" />
          </div>
          <div className="intro-photo intro-photo-4">
            <img src={intro4Photo} alt="intro_4" />
          </div>
          <div className="intro-photo intro-photo-5">
            <img src={intro5Photo} alt="intro_5" />
          </div>
          <div className="intro-photo intro-photo-6">
            <img src={intro6Photo} alt="intro_6" />
          </div>

          {/* 중앙 텍스트 */}
          <div className="intro-text-box">
            <h2>스튜디오 울창(Studio UUUL)은</h2>
            <p>
              큰 나무를 지향합니다.<br/>
              단단한 뿌리를 공유하며 각자만의 미학으로 뻗어나갈 수 있는 예술 공동체,<br/>
              그 중심에 울창이 있습니다.<br/>
              참고로 재밌습니다.
            </p>
          </div>
        </div>
      </div>

      {/* People 2: 창립자들 섹션 */}
      <div className="people-section">
        <div className="people-container-inner">
          
          {/* 첫 번째 창립자 - 왼쪽 */}
          <div className="first-founder">
            <img 
              src={srPhoto}
              alt="송새론 Co-Founder"
              className="first-founder-image"
            />
            <div className="first-founder-text">
              <h3 className="founder-role">Co-Founder</h3>
              <h2 className="founder-name">송새론</h2>
              <p className="founder-description">
                사랑을 탐구합니다.<br/>다 함께, 유쾌하게, 당돌하게!<br/><br/>
                한국예술종합학교 예술전문사 영화과 연출전공<br/>
                성균관대학교 영어영문학과 / 소프트웨어학과<br/>
                대원외국어고등학교 영어과
              </p>
            </div>
          </div>

          {/* 두 번째 창립자 - 오른쪽 */}
          <div className="second-founder-container">
            <div className="second-founder">
              <div className="second-founder-text">
                <h3 className="second-founder-role">Co-Founder</h3>
                <h2 className="second-founder-name">정한영</h2>
                <p className="second-founder-description">
                  그림을 그리고, 무언가를 만들고, <br/>영화를 찍습니다.<br/> 생경하고 기묘한 순간을 따라갑니다.<br/><br/>
                  연세대학교 건축학과<br/>
                  서울과학고등학교
                </p>
              </div>
              <img 
                src={hyPhoto}
                alt="정한영 Co-Founder"
                className="second-founder-image"
              />
            </div>
          </div>

          {/* 세 번째 창립자 - 왼쪽 (들여쓰기) */}
          <div className="third-founder-container">
            <div className="third-founder">
              <img 
                src={yjPhoto}
                alt="장윤재 Co-Founder"
                className="second-founder-image"
              />
              <div className="third-founder-text">
                <h3 className="second-founder-role">Co-Founder</h3>
                <h2 className="second-founder-name">장윤재</h2>
                <p className="second-founder-description">
                  섬세함과 호기심으로 세상을 바라봅니다.<br/>흙과 돌, 바다와 대지를 품고 살아가고 있습니다.<br/><br/>
                  서울대학교 경영학과 / 건축학과<br/>
                  대원외국어고등학교 영어과
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* People 3: 팀 멤버들 4명 섹션 */}
      <div className="people-section-3">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img 
                src={member.photo}
                alt={`${member.name} ${member.role}`}
                className="team-image"
              />
              <h3 className="team-role">{member.role}</h3>
              <h4 className="team-name">{member.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* People 4: 8명 갤러리 섹션 */}
      <div className="people-section-4">
        <div className="gallery-8">
          {galleryMembers.map((member, index) => (
            <div 
              key={index}
              className="gallery-item"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img 
                src={member.photo}
                alt={`${member.name} ${member.role}`}
                className="gallery-image"
              />
              {hoveredMember === index && (
                <div className="gallery-overlay">
                  <div>{member.name}</div>
                  <div className="gallery-overlay-role">{member.role}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default People;