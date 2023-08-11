import React from 'react';
import './style.css';
import Navbar from './Navbar';
import MovieList from './MovieList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList />
      <Footer />
    </div>
  );
}

export default App;
