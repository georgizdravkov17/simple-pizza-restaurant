import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HomeScreen, MenuScreen, AboutScreen, ContactScreen, NotFoundScreen } from './screens/screens.js';
import { Header, Footer, NewsLetter } from './components/components';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
       <Routes>
           <Route exact path="/" element={<HomeScreen />} />
           <Route exact path="/menu" element={<MenuScreen />} />
           <Route exact path="/about" element={<AboutScreen />} />
           <Route exact path="/contact" element={<ContactScreen />} />
           <Route path="/*" element={<NotFoundScreen />} />
        </Routes>
        <NewsLetter />
        <Footer />
    </div>
    </Router>
  );
}

export default App;
