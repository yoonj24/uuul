import React, { useState, useRef, useEffect } from 'react';
import Nav from '../items/nav';
import '../style/Works.css';

// Apple images
import apple2 from '../icons/apple_1.png';
import apple3 from '../icons/apple_2.png';
import apple4 from '../icons/apple_3.png';
import apple5 from '../icons/apple_4.png';
import apple6 from '../icons/apple_5.png';
import apple1 from '../icons/apple_6.png';

// Wood images
import wood5 from '../icons/wood_1.png';
import wood6 from '../icons/wood_2.png';
import wood1 from '../icons/wood_3.png';
import wood2 from '../icons/wood_4.png';
import wood3 from '../icons/wood_5.png';
import wood4 from '../icons/wood_6.png';

// Spring images
import spring1 from '../icons/spring_1.png';
import spring2 from '../icons/spring_2.png';
import spring3 from '../icons/spring_3.png';
import spring4 from '../icons/spring_4.png';
import spring5 from '../icons/spring_5.png';
import spring6 from '../icons/spring_6.png';

const Works = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const columnRefs = useRef([]);

  // 이미지 데이터
  const column1Images = [
    { src: apple1 },
    { src: apple2 },
    { src: apple3 },
    { src: apple4 },
    { src: apple5 },
    { src: apple6 }
  ];

  const column2Images = [
    { src: wood1 },
    { src: wood2 },
    { src: wood3 },
    { src: wood4 },
    { src: wood5 },
    { src: wood6 }
  ];

  const column3Images = [
    { src: spring1 },
    { src: spring2 },
    { src: spring3 },
    { src: spring4 },
    { src: spring5 },
    { src: spring6 }
  ];

  // 🎰 각 컬럼별 다른 시작점을 가진 양방향 무한 스크롤 컨텐츠 생성
  const createBidirectionalInfiniteContent = (images, titleBlock, columnIndex) => {
    const baseItems = [];
    const cycleLength = 6; // 사이클 길이를 6으로 설정
    
    // 기본 패턴 생성 (이미지 + 제목 배치)
    for (let i = 0; i < cycleLength; i++) {
      const imageIndex = i % images.length;
      baseItems.push({
        type: 'image',
        ...images[imageIndex],
        key: `base-${i}`,
        cycleIndex: i
      });
      
      // 컬럼별로 다른 위치에 제목 블록 배치
      let shouldAddTitle = false;
      switch (columnIndex) {
        case 0: // 컬럼 1: 사이클 시작 부분에 제목
          shouldAddTitle = (i === 0); // 첫 번째에 제목 배치
          break;
        case 1: // 컬럼 2: 사이클 중간에 제목
          shouldAddTitle = (i === Math.floor(cycleLength / 2)); // 3번째 (인덱스 3)
          break;
        case 2: // 컬럼 3: 사이클 끝 부분에 제목
          shouldAddTitle = (i === cycleLength - 1); // 마지막 (인덱스 5)
          break;
      }
      
      if (shouldAddTitle) {
        baseItems.push({
          type: 'title',
          content: titleBlock,
          key: `base-title-${i}`,
          cycleIndex: i
        });
      }
    }

    // 🔑 핵심: 위아래로 충분히 반복하여 진정한 무한 스크롤 구현
    const infiniteItems = [];
    const repetitions = 40; // 반복 횟수 조정
    
    // 위쪽 반복
    for (let rep = repetitions; rep > 0; rep--) {
      baseItems.forEach((item, index) => {
        infiniteItems.push({
          ...item,
          key: `up-${rep}-${index}`,
          position: `up-${rep}`
        });
      });
    }

    // 중앙 (기준점)
    baseItems.forEach((item, index) => {
      infiniteItems.push({
        ...item,
        key: `center-${index}`,
        position: 'center'
      });
    });

    // 아래쪽 반복
    for (let rep = 1; rep <= repetitions; rep++) {
      baseItems.forEach((item, index) => {
        infiniteItems.push({
          ...item,
          key: `down-${rep}-${index}`,
          position: `down-${rep}`
        });
      });
    }

    return infiniteItems;
  };

  // 🎰 양방향 무한 스크롤 이벤트 핸들러
  const handleScroll = (e, columnIndex) => {
    const element = e.target;
    const { scrollTop, scrollHeight, clientHeight } = element;
    
    // 스크롤 위치 계산
    const scrollRatio = scrollTop / (scrollHeight - clientHeight);
    const centerPoint = scrollHeight / 2;
    
    // 🔄 위쪽 끝에 도달했을 때 (슬롯머신 스타일 리셋)
    if (scrollTop < 100) {
      const newScrollTop = centerPoint + (scrollTop - 100);
      element.scrollTo({
        top: newScrollTop,
        behavior: 'auto' // 즉시 이동
      });
    }
    
    // 🔄 아래쪽 끝에 도달했을 때 (슬롯머신 스타일 리셋)
    if (scrollTop > scrollHeight - clientHeight - 100) {
      const newScrollTop = centerPoint - (scrollHeight - clientHeight - 100 - scrollTop);
      element.scrollTo({
        top: newScrollTop,
        behavior: 'auto' // 즉시 이동
      });
    }
  };

  // 🎯 각 컬럼별로 다른 초기 위치 설정 (텍스트 블록 기준)
  useEffect(() => {
    if (currentPage !== 1) return;

    const timer = setTimeout(() => {
      columnRefs.current.forEach((ref, index) => {
        if (ref && ref.scrollHeight > 0) {
          const totalHeight = ref.scrollHeight;
          const centerPosition = totalHeight / 2;
          let initialPosition;

          switch (index) {
            case 0:
              // 컬럼 1: 텍스트가 맨 상단에 보이도록 (중앙보다 훨씬 위로)
              initialPosition = centerPosition - (totalHeight * 0.35);
              break;
            case 1:
              // 컬럼 2: 텍스트가 중앙에 보이도록 (정확히 중앙)
              initialPosition = centerPosition;
              break;
            case 2:
              // 컬럼 3: 텍스트가 아래쪽에 보이도록 (조금 아래에서 시작)
              initialPosition = centerPosition + (totalHeight * 0.15);
              break;
            default:
              initialPosition = centerPosition;
          }

          ref.scrollTo({
            top: initialPosition,
            behavior: 'auto'
          });
        }
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [currentPage]);

  // 제목 블록들
  const titleBlock1 = (
    <div className="movie-title-block">
      <h2>Mars and the First Apple Tree</h2>
      <p>(2025)</p>
      <p>연출 송새론</p>
    </div>
  );

  const titleBlock2 = (
    <div className="movie-title-block">
      <h2>수풀 우거진 곳에서</h2>
      <p>(2025)</p>
      <p>연출 송새론</p>
    </div>
  );

  const titleBlock3 = (
    <div className="movie-title-block">
      <h2>늦봄</h2>
      <p>(2025)</p>
      <p>연출 송새론</p>
    </div>
  );

  // 각 컬럼의 양방향 무한 컨텐츠 생성
  const infiniteContent1 = createBidirectionalInfiniteContent(column1Images, titleBlock1, 0);
  const infiniteContent2 = createBidirectionalInfiniteContent(column2Images, titleBlock2, 1);
  const infiniteContent3 = createBidirectionalInfiniteContent(column3Images, titleBlock3, 2);

  return (
    <div className="works-container">
      <Nav onNavigate={onNavigate} currentPage="works" />
      
      <div className="works-content">
        <div className="works-columns">
          {/* 컬럼 1 - 양방향 무한 스크롤 */}
          <div 
            className="works-column infinite-scroll-column" 
            ref={el => columnRefs.current[0] = el}
            onScroll={(e) => handleScroll(e, 0)}
          >
            <div className={`column-content ${currentPage === 2 ? 'page-2-content' : ''}`}>
              {currentPage === 1 ? (
                infiniteContent1.map((item, index) => (
                  item.type === 'title' ? (
                    <div key={item.key} className="infinite-title-block">
                      {item.content}
                    </div>
                  ) : (
                    <div key={item.key} className="movie-image infinite-image">
                      <img src={item.src} alt={`Movie scene ${index}`} />
                    </div>
                  )
                ))
              ) : (
                // Page 2: 컬럼 1 - 상단에 Coming Soon 텍스트
                <div className="coming-soon-full-column">
                  <div className="coming-soon-text coming-soon-top">
                    <h2>Coming Soon</h2>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 컬럼 2 - 양방향 무한 스크롤 */}
          <div 
            className="works-column infinite-scroll-column" 
            ref={el => columnRefs.current[1] = el}
            onScroll={(e) => handleScroll(e, 1)}
          >
            <div className={`column-content ${currentPage === 2 ? 'page-2-content' : ''}`}>
              {currentPage === 1 ? (
                infiniteContent2.map((item, index) => (
                  item.type === 'title' ? (
                    <div key={item.key} className="infinite-title-block">
                      {item.content}
                    </div>
                  ) : (
                    <div key={item.key} className="movie-image infinite-image">
                      <img src={item.src} alt={`Movie scene ${index}`} />
                    </div>
                  )
                ))
              ) : (
                // Page 2: 컬럼 2 - 중앙에 Coming Soon 텍스트
                <div className="coming-soon-full-column">
                  <div className="coming-soon-text coming-soon-center">
                    <h2>Coming Soon</h2>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 컬럼 3 - 양방향 무한 스크롤 */}
          <div 
            className="works-column infinite-scroll-column" 
            ref={el => columnRefs.current[2] = el}
            onScroll={(e) => handleScroll(e, 2)}
          >
            <div className={`column-content ${currentPage === 2 ? 'page-2-content' : ''}`}>
              {currentPage === 1 ? (
                infiniteContent3.map((item, index) => (
                  item.type === 'title' ? (
                    <div key={item.key} className="infinite-title-block">
                      {item.content}
                    </div>
                  ) : (
                    <div key={item.key} className="movie-image infinite-image">
                      <img src={item.src} alt={`Movie scene ${index}`} />
                    </div>
                  )
                ))
              ) : (
                // Page 2: 컬럼 3 - 하단에 Coming Soon 텍스트
                <div className="coming-soon-full-column">
                  <div className="coming-soon-text coming-soon-bottom">
                    <h2>Coming Soon</h2>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 페이지 네비게이션 */}
      <div className="page-navigation">
        <button 
          className={`page-btn ${currentPage === 1 ? 'active' : ''}`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
        <button 
          className={`page-btn ${currentPage === 2 ? 'active' : ''}`}
          onClick={() => setCurrentPage(2)}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default Works;