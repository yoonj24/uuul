import React, { useState } from 'react';
import People from './components/People';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <div>
          <h1>Home Page</h1>
          <button onClick={() => navigateTo('people')}>Go to People</button>
        </div>
      )}
      
      {currentPage === 'people' && (
        <People onNavigate={navigateTo} />
      )}
      
      {currentPage === 'works' && (
        <div>
          <h1>Works Page</h1>
          <button onClick={() => navigateTo('home')}>Go to Home</button>
        </div>
      )}
    </div>
  );
}

export default App;