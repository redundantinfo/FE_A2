import React from 'react';
import './style.css';
import Navbar from './Navbar';
import MovieList from './MovieList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render Navbar component */}
      <MovieList /> {/* Render MovieList component */}
      <Footer /> {/* Render Footer component */}
    </div>
  );
}

export default App;
