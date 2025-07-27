// App.js
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
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
        </div>

        {/* 2번 로고 (동작 없음) */}
        <div className={styles.logo}>
          <div className={styles.link}></div>
        </div>

        {/* 3번 로고 (동작 없음) */}
        <div className={styles.logo}>
          <div className={styles.link}></div>
        </div>

        {/* 4번 로고 → /works 이동 */}
        <div className={styles.logo} onClick={() => navigate('/works')}>
          <div className={styles.link}></div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={styles.wraper}>
          <Routes>
            <Route path="/" element={<LogoGrid />} />
            <Route path="/people" element={<People />} />
            <Route path="/works" element={<Works />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
