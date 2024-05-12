import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import React, { useState } from 'react';
const Home = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    alert('Button clicked with input:', inputText);
  };

  return (
    <div className="home">
      <h1>Can I Haz Deployz?</h1>
      <div>
        <input type="text" id="inputText" value={inputText} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Invoke Web API</button>
      </div>
    </div>
  );
};

export default Home;
