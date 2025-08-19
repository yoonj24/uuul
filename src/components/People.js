import React, { useState } from 'react';
import Nav from '../items/nav';
import peoplePageBg from '../icons/people_page_bg.png';
import peopleImg from '../icons/people.png';
import '../style/People.css';

const People = ({ onNavigate }) => {
  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    { name: '이상빈', role: 'Producer' },
    { name: '정대건', role: 'Designer' },
    { name: '김수민', role: 'Project Coordinator' },
    { name: '이종건', role: 'Art Coordinator' },
    { name: '윤승현', role: 'Developer' }
  ];

  const galleryMembers = Array(8).fill().map((_, i) => ({
    name: `멤버${i + 1}`,
    role: 'Story Minor'
  }));

  return (
    <div className="people-container" style={{ '--bg-image': `url(${peoplePageBg})` }}>
      {/* 네비게이션 바 */}
      <Nav onNavigate={onNavigate} currentPage="people" />

      {/* People 1: 스튜디오 소개 섹션 */}
      <div className="people-section people-intro-section">
        <div className="intro-container">
          {/* 사진들 */}
          <div className="intro-photo intro-photo-1">
            사진
          </div>
          <div className="intro-photo intro-photo-2">
            사진
          </div>
          <div className="intro-photo intro-photo-3">
            사진
          </div>
          <div className="intro-photo intro-photo-4">
            사진
          </div>
          <div className="intro-photo intro-photo-5">
            사진
          </div>
          <div className="intro-photo intro-photo-6">
            사진
          </div>

          {/* 중앙 텍스트 */}
          <div className="intro-text-box">
            <h2>스튜디오 울창은</h2>
            <p>
              함께 숨 쉬고고 미워하는 예술의 숨입니다<br/>
              영화에서 시작해 이야기와 잡과 빛나는 창명들을<br/>
              지마다 다른 길이 모여 하나의 숨결이 되고<br/>
              아름다움은 여기서 태어나 서로에게 스며듭니다
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
              src={peopleImg}
              alt="송새론 Co-Founder"
              className="first-founder-image"
            />
            <div className="first-founder-text">
              <h3 className="founder-role">Co-Founder</h3>
              <h2 className="founder-name">송새론</h2>
              <p className="founder-description">
                사랑을 탐구합니다.<br/>다 함께, 유쾌하게, 당돌하게!<br/><br/>
                한국예술종합학교 예술전문사 영상과 연출전공<br/>
                성균관대학교 학사 언어영문학과 / 소프트웨어학과<br/>
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
                  연세대학교 학사 건축학과<br/>
                  서울과학고등학교
                </p>
              </div>
              <img 
                src={peopleImg}
                alt="정한영 Co-Founder"
                className="second-founder-image"
              />
            </div>
          </div>

          {/* 세 번째 창립자 - 왼쪽 (들여쓰기) */}
          <div className="third-founder-container">
            <div className="third-founder">
              <img 
                src={peopleImg}
                alt="장윤재 Co-Founder"
                className="second-founder-image"
              />
              <div className="third-founder-text">
                <h3 className="second-founder-role">Co-Founder</h3>
                <h2 className="second-founder-name">장윤재</h2>
                <p className="second-founder-description">
                  섬세함과 호기심으로 세상을 바라봅니다.<br/>흙과 돌, 바다와 대지를 품고 살아가고 있습니다.<br/><br/>
                  서울대학교 학사 경영학과 / 건축학과<br/>
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
                src={peopleImg}
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
                src={peopleImg}
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