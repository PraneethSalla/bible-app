import React, { useState } from 'react';
import axios from 'axios';

const RandomVerse = () => {
  const [verse, setVerse] = useState(null);

  const fetchRandomVerse = async () => {
    try {
      const { data } = await axios.get('https://labs.bible.org/api/?passage=random&type=json');
      setVerse(data[0]);
    } catch (error) {
      console.error('Error fetching random verse:', error);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>Random Bible Verse</h2>
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
      {verse && (
        <div>
          <p><strong>{verse.bookname} {verse.chapter}:{verse.verse}</strong></p>
          <p>{verse.text}</p>
        </div>
      )}
    </div>
  );
};

export default RandomVerse;
