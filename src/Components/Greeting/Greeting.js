import React from 'react';
import './Greeting.css'

const Greeting = ({img, name}) => {
  return (
    <>
      <h2>It's Ban</h2>
      <img src={img} alt="" className="profile_img"/>
      <div>hello my dear {name}!</div>
    </>
  );
};

export default Greeting;