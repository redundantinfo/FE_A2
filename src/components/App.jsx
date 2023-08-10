import React from 'react';
import './style.css';
import Navbar from './Navbar'; // Import the Navbar component
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render the Navbar component */}
      <MovieList /> {/* Render the MovieList component */}
    </div>
  );
}

export default App;
