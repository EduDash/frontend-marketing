import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationContextProvider from './context/NavigationContext';
import MainView from './MainView';

function App() {
  return (
    <Router>
      <NavigationContextProvider>
        <Navbar />
        <div className='flex justify-center'>
          <MainView />
        </div>
      </NavigationContextProvider>
    </Router>
  );
}

export default App;
