import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import React, { useRef } from 'react';

function MyComponent() {
  const myInputRef = useRef();

  const handleClick = () => {
    const url = `/api/ssldays?name=${myInputRef.current.value}`;
    console.log(`Let's fetch: ${url}`);
    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <input ref={myInputRef} type="text" />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
}

const Home = () => (
  <div className="home">
    <h1>Deployzing haz Static Appz!</h1>
    <p>Choose website to check:</p>
    <MyComponent />
  </div>
);

export default Home;
