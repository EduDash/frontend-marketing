import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='flex justify-center items-center h-screen'>
        <h1>EduDash</h1>
      </div>
    </Router>
  );
}

export default App;
