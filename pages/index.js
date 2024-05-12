import SmallCard from '../components/SmallCard';
import { projectIcons } from '../components/Icons';

import { projects } from '../utils/projectsData';
import React, { useRef } from 'react';

function MyComponent() {
  const myInputRef = useRef();

  const handleClick = () => {
    // invoke REST API
    let url = 'https://gist.githubusercontent.com/codingoutloud/be2edce7c57e8eee771acd4d15dd77e6/raw/ad4b1b9f2259b11f58a6a04c63c1e86bf27efaf2/foo.json';
    // url = './HttpTrigger1';
    // url = './api/HttpTrigger1';
    // url = './ssldays';
    // url = './api/ssldays';
    
    // url = '/HttpTrigger1';
    // url = '/api/HttpTrigger1';
    // url = '/ssldays';
    // url = '/api/ssldays';
    
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
