import React, { useState, useEffect, useRef } from 'react';
import Nav from '../items/nav';
import '../style/Works.css';

const Works = ({ onNavigate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const columnRefs = useRef([]);

  // 원형 스크롤을 위한 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = (columnRef, index) => {
      if (!columnRef) return;
      
      const { scrollTop, scrollHeight, clientHeight } = columnRef;
      const threshold = 100; // 스크롤 임계값
      
      // 각 컬럼의 특성에 맞는 순환 위치 계산
      let resetPositionTop, resetPositionBottom;
      
      switch (index) {
        case 0: // 컬럼 1
          resetPositionTop = scrollHeight * 0.6; // 위로 갈 때 이동할 위치
          resetPositionBottom = scrollHeight * 0.2; // 아래로 갈 때 이동할 위치
          break;
        case 1: // 컬럼 2  
          resetPositionTop = scrollHeight * 0.75; // 위로 갈 때 이동할 위치
          resetPositionBottom = scrollHeight * 0.15; // 아래로 갈 때 이동할 위치
          break;
        case 2: // 컬럼 3
          resetPositionTop = scrollHeight * 0.9; // 위로 갈 때 이동할 위치
          resetPositionBottom = scrollHeight * 0.3; // 아래로 갈 때 이동할 위치
          break;
        default:
          resetPositionTop = scrollHeight * 0.66;
          resetPositionBottom = scrollHeight * 0.33;
      }
      
      // 맨 아래 도달 시 상단 쪽으로 이동
      if (scrollTop + clientHeight >= scrollHeight - threshold) {
        columnRef.scrollTop = resetPositionBottom;
      }
      
      // 맨 위 도달 시 하단 쪽으로 이동
      if (scrollTop <= threshold) {
        columnRef.scrollTop = resetPositionTop;
      }
    };

    const scrollListeners = columnRefs.current.map((ref, index) => {
      if (ref) {
        const listener = () => handleScroll(ref, index);
        ref.addEventListener('scroll', listener, { passive: true });
        return { ref, listener };
      }
      return null;
    }).filter(Boolean);

    return () => {
      scrollListeners.forEach(({ ref, listener }) => {
        ref.removeEventListener('scroll', listener);
      });
    };
  }, [currentPage]);

  // 영화 데이터 (15개씩 3개 컬럼)
  const movies = [
    // 컬럼 1 데이터
    [
      { title: 'Mars and the First Apple Tree', year: '(2025)', director: '연출 송세은', image: 'movie1.jpg' },
      { title: '영화 제목 2', year: '(2024)', director: '연출 감독명', image: 'movie2.jpg' },
      { title: '영화 제목 3', year: '(2023)', director: '연출 감독명', image: 'movie3.jpg' },
      { title: '영화 제목 4', year: '(2024)', director: '연출 감독명', image: 'movie4.jpg' },
      { title: '영화 제목 5', year: '(2025)', director: '연출 감독명', image: 'movie5.jpg' },
      { title: '영화 제목 6', year: '(2023)', director: '연출 감독명', image: 'movie6.jpg' },
      { title: '영화 제목 7', year: '(2024)', director: '연출 감독명', image: 'movie7.jpg' },
      { title: '영화 제목 8', year: '(2025)', director: '연출 감독명', image: 'movie8.jpg' },
      { title: '영화 제목 9', year: '(2023)', director: '연출 감독명', image: 'movie9.jpg' },
      { title: '영화 제목 10', year: '(2024)', director: '연출 감독명', image: 'movie10.jpg' },
      { title: '영화 제목 11', year: '(2025)', director: '연출 감독명', image: 'movie11.jpg' },
      { title: '영화 제목 12', year: '(2023)', director: '연출 감독명', image: 'movie12.jpg' },
      { title: '영화 제목 13', year: '(2024)', director: '연출 감독명', image: 'movie13.jpg' },
      { title: '영화 제목 14', year: '(2025)', director: '연출 감독명', image: 'movie14.jpg' },
      { title: '영화 제목 15', year: '(2023)', director: '연출 감독명', image: 'movie15.jpg' }
    ],
    // 컬럼 2 데이터
    [
      { title: '수를 우거진 곳에서', year: '(2025)', director: '연출 송세은', image: 'movie16.jpg' },
      { title: '영화 제목 17', year: '(2024)', director: '연출 감독명', image: 'movie17.jpg' },
      { title: '영화 제목 18', year: '(2023)', director: '연출 감독명', image: 'movie18.jpg' },
      { title: '영화 제목 19', year: '(2024)', director: '연출 감독명', image: 'movie19.jpg' },
      { title: '영화 제목 20', year: '(2025)', director: '연출 감독명', image: 'movie20.jpg' },
      { title: '영화 제목 21', year: '(2023)', director: '연출 감독명', image: 'movie21.jpg' },
      { title: '영화 제목 22', year: '(2024)', director: '연출 감독명', image: 'movie22.jpg' },
      { title: '영화 제목 23', year: '(2025)', director: '연출 감독명', image: 'movie23.jpg' },
      { title: '영화 제목 24', year: '(2023)', director: '연출 감독명', image: 'movie24.jpg' },
      { title: '영화 제목 25', year: '(2024)', director: '연출 감독명', image: 'movie25.jpg' },
      { title: '영화 제목 26', year: '(2025)', director: '연출 감독명', image: 'movie26.jpg' },
      { title: '영화 제목 27', year: '(2023)', director: '연출 감독명', image: 'movie27.jpg' },
      { title: '영화 제목 28', year: '(2024)', director: '연출 감독명', image: 'movie28.jpg' },
      { title: '영화 제목 29', year: '(2025)', director: '연출 감독명', image: 'movie29.jpg' },
      { title: '영화 제목 30', year: '(2023)', director: '연출 감독명', image: 'movie30.jpg' }
    ],
    // 컬럼 3 데이터
    [
      { title: '놀봄', year: '(2025)', director: '연출 송세은', image: 'movie31.jpg' },
      { title: '영화 제목 32', year: '(2024)', director: '연출 감독명', image: 'movie32.jpg' },
      { title: '영화 제목 33', year: '(2023)', director: '연출 감독명', image: 'movie33.jpg' },
      { title: '영화 제목 34', year: '(2024)', director: '연출 감독명', image: 'movie34.jpg' },
      { title: '영화 제목 35', year: '(2025)', director: '연출 감독명', image: 'movie35.jpg' },
      { title: '영화 제목 36', year: '(2023)', director: '연출 감독명', image: 'movie36.jpg' },
      { title: '영화 제목 37', year: '(2024)', director: '연출 감독명', image: 'movie37.jpg' },
      { title: '영화 제목 38', year: '(2025)', director: '연출 감독명', image: 'movie38.jpg' },
      { title: '영화 제목 39', year: '(2023)', director: '연출 감독명', image: 'movie39.jpg' },
      { title: '영화 제목 40', year: '(2024)', director: '연출 감독명', image: 'movie40.jpg' },
      { title: '영화 제목 41', year: '(2025)', director: '연출 감독명', image: 'movie41.jpg' },
      { title: '영화 제목 42', year: '(2023)', director: '연출 감독명', image: 'movie42.jpg' },
      { title: '영화 제목 43', year: '(2024)', director: '연출 감독명', image: 'movie43.jpg' },
      { title: '영화 제목 44', year: '(2025)', director: '연출 감독명', image: 'movie44.jpg' },
      { title: '영화 제목 45', year: '(2023)', director: '연출 감독명', image: 'movie45.jpg' }
    ]
  ];

  // 페이지 2용 빈 데이터
  const emptyMovies = [
    Array(15).fill({ title: 'Coming Soon', year: '', director: '', image: null }),
    Array(15).fill({ title: 'Coming Soon', year: '', director: '', image: null }),
    Array(15).fill({ title: 'Coming Soon', year: '', director: '', image: null })
  ];

  const currentMovies = currentPage === 1 ? movies : emptyMovies;

  // 무한 스크롤을 위한 이미지 배열들
  const column1Images = [
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop" }
  ];

  const column2Images = [
    { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=450&fit=crop" }
  ];

  const column3Images = [
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=450&fit=crop" },
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=450&fit=crop" }
  ];

  // 무한 스크롤 생성 함수
  const createInfiniteContent = (images, titleBlock = null, titlePosition = 'top') => {
    const repeatedImages = [];
    
    for (let i = 0; i < 50; i++) { // 50번 반복하여 충분한 콘텐츠 생성
      images.forEach((img, index) => {
        // 제목을 여러 번 반복해서 배치
        if (titleBlock && titlePosition === 'top' && index === 0 && i % 5 === 0) {
          repeatedImages.push({ type: 'title', content: titleBlock, key: `title-${i}-${index}` });
        }
        if (titleBlock && titlePosition === 'middle' && index === 2 && i % 5 === 0) {
          repeatedImages.push({ type: 'title', content: titleBlock, key: `title-${i}-${index}` });
        }
        if (titleBlock && titlePosition === 'bottom' && index === 4 && i % 5 === 0) {
          repeatedImages.push({ type: 'title', content: titleBlock, key: `title-${i}-${index}` });
        }
        repeatedImages.push({ type: 'image', ...img, key: `${i}-${index}` });
      });
    }
    return repeatedImages;
  };

  // 초기 스크롤 위치 설정
  useEffect(() => {
    const setInitialScrollPositions = () => {
      if (currentPage === 1) {
        columnRefs.current.forEach((ref, index) => {
          if (ref) {
            setTimeout(() => {
              const totalHeight = ref.scrollHeight;
              let initialPosition;
              
              switch (index) {
                case 0: // 컬럼 1: 제목이 화면 상단에 오도록
                  initialPosition = totalHeight * 0.01; // 화면 상단
                  break;
                case 1: // 컬럼 2: 제목이 화면 중간에 오도록  
                  initialPosition = totalHeight * 0.15; // 화면 중간
                  break;
                case 2: // 컬럼 3: 제목이 화면 하단에 오도록
                  initialPosition = totalHeight * 0.30; // 화면 하단
                  break;
                default:
                  initialPosition = totalHeight / 3;
              }
              
              ref.scrollTop = initialPosition;
            }, 100);
          }
        });
      }
    };

    // 컴포넌트 마운트 시와 currentPage 변경 시 실행
    setInitialScrollPositions();
  }, [currentPage]);

  // 컴포넌트 마운트 시에도 실행되도록 추가 useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPage === 1) {
        columnRefs.current.forEach((ref, index) => {
          if (ref) {
            const totalHeight = ref.scrollHeight;
            let initialPosition;
            
            switch (index) {
              case 0: // 컬럼 1: 제목이 화면 상단에 오도록
                initialPosition = totalHeight * 0.01; // 화면 상단
                break;
              case 1: // 컬럼 2: 제목이 화면 중간에 오도록  
                initialPosition = totalHeight * 0.15; // 화면 중간
                break;
              case 2: // 컬럼 3: 제목이 화면 하단에 오도록
                initialPosition = totalHeight * 0.30; // 화면 하단
                break;
              default:
                initialPosition = totalHeight / 3;
            }
            
            ref.scrollTop = initialPosition;
          }
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // 각 컬럼의 제목 블록들
  const titleBlock1 = (
    <div className="movie-title-block">
      <h2>Mars and the First Apple Tree</h2>
      <p>(2025)</p>
      <p>연출 송세은</p>
    </div>
  );

  const titleBlock2 = (
    <div className="movie-title-block">
      <h2>수를 우거진 곳에서</h2>
      <p>(2025)</p>
      <p>연출 송세은</p>
    </div>
  );

  const titleBlock3 = (
    <div className="movie-title-block">
      <h2>놀봄</h2>
      <p>(2025)</p>
      <p>연출 송세은</p>
    </div>
  );

  // 무한 컨텐츠 생성
  const infiniteContent1 = createInfiniteContent(column1Images, titleBlock1, 'top');
  const infiniteContent2 = createInfiniteContent(column2Images, titleBlock2, 'middle');
  const infiniteContent3 = createInfiniteContent(column3Images, titleBlock3, 'bottom');
  return (
    <div className="works-container">
      <Nav onNavigate={onNavigate} currentPage="works" />
      
      <div className="works-content">
        <div className="works-columns">
          {/* 컬럼 1 */}
          <div className="works-column" ref={el => columnRefs.current[0] = el}>
            <div className="column-content">
              {currentPage === 1 ? (
                infiniteContent1.map((item, index) => (
                  item.type === 'title' ? (
                    <div key={`${item.key}-1`}>
                      {item.content}
                    </div>
                  ) : (
                    <div key={`image-1-${item.key}`} className="movie-image">
                      <img src={item.src} alt={`Movie scene ${index}`} />
                    </div>
                  )
                ))
              ) : (
                <div className="coming-soon-block">
                  <h2>Coming Soon</h2>
                </div>
              )}
            </div>
          </div>

          {/* 컬럼 2 */}
          <div className="works-column" ref={el => columnRefs.current[1] = el}>
            <div className="column-content">
              {currentPage === 1 ? (
                infiniteContent2.map((item, index) => (
                  item.type === 'title' ? (
                    <div key={`${item.key}-2`}>
                      {item.content}
                    </div>
                  ) : (
                    <div key={`image-2-${item.key}`} className="movie-image">
                      <img src={item.src} alt={`Movie scene ${index}`} />
                    </div>
                  )
                ))
              ) : (
                <div className="coming-soon-block">
                  <h2>Coming Soon</h2>
                </div>
              )}
            </div>
          </div>

          {/* 컬럼 3 */}
          <div className="works-column" ref={el => columnRefs.current[2] = el}>
            <div className="column-content">
              {currentPage === 1 ? (
                infiniteContent3.map((item, index) => (
                  item.type === 'title' ? (
                    <div key={`${item.key}-3`}>
                      {item.content}
                    </div>
                  ) : (
                    <div key={`image-3-${item.key}`} className="movie-image">
                      <img src={item.src} alt={`Movie scene ${index}`} />
                    </div>
                  )
                ))
              ) : (
                <div className="coming-soon-block">
                  <h2>Coming Soon</h2>
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