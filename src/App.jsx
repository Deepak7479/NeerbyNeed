// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/global.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AppRoutes from './Routes.jsx';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
