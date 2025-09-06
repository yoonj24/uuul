// App.js
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import People from './components/People';
import Works from './components/Works';

import './reset.css';
import styles from './App.module.css';

function LogoGrid() {
  const navigate = useNavigate();

  return (
    <div className={styles.box}>
      <div className={styles.logoBox}>
        {/* 1번 로고 → /people 이동 */}
        <div className={styles.logo} onClick={() => navigate('/people')}>
          <div className={styles.link}></div>
          <div className={styles.hoverText}>
            <div className={styles.peopleText}>
              <h2>People</h2>
            </div>
          </div>
        </div>

        {/* 2번 로고 (동작 없음) */}
        <div className={styles.logo}>
          <div className={styles.link}></div>
          <div className={styles.hoverText}>
            <div className={styles.studioText}>
              <h2>울창</h2>
              <p>Studio UUUL</p>
              <p>EST. 2025</p>
            </div>
          </div>
        </div>

        {/* 3번 로고 (동작 없음) */}
        <div className={styles.logo}>
          <div className={styles.link}></div>
          <div className={styles.hoverText}>
            <div className={styles.contactText}>
              <h2>Contact</h2><br/>
              <p>instagram @studio.uuul</p>
              <p>studiouuul@gmail.com</p>
              <p>Seoul, Korea</p>
            </div>
          </div>
        </div>

        {/* 4번 로고 → /works 이동 */}
        <div className={styles.logo} onClick={() => navigate('/works')}>
          <div className={styles.link}></div>
          <div className={styles.hoverText}>
            <div className={styles.worksText}>
              <h2>Works</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// onNavigate 함수를 만드는 컴포넌트
function PeopleWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page) => {
    if (page === 'home') {
      navigate('/');
    } else if (page === 'works') {
      navigate('/works');
    } else if (page === 'people') {
      navigate('/people');
    }
  };

  const getCurrentPage = () => {
    if (location.pathname === '/people') return 'people';
    if (location.pathname === '/works') return 'works';
    return 'home';
  };

  return <People onNavigate={handleNavigate} currentPage={getCurrentPage()} />;
}

function WorksWrapper() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (page) => {
    if (page === 'home') {
      navigate('/');
    } else if (page === 'works') {
      navigate('/works');
    } else if (page === 'people') {
      navigate('/people');
    }
  };

  const getCurrentPage = () => {
    if (location.pathname === '/people') return 'people';
    if (location.pathname === '/works') return 'works';
    return 'home';
  };

  return <Works onNavigate={handleNavigate} currentPage={getCurrentPage()} />;
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={styles.wraper}>
          <Routes>
            <Route path="/" element={<LogoGrid />} />
            <Route path="/people" element={<PeopleWrapper />} />
            <Route path="/works" element={<WorksWrapper />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;