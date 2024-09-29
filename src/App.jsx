import React from 'react';
import RandomVerse from './components/RandomVerse';
import SpecificVerse from './components/SpecificVerse';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Simple Bible Verse App</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
}

export default App;
