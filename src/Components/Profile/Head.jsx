import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import FullName from './FullName';
import './Head.css'
import AboutMe from './AboutMe';


function Head() {
  return (
    <div className='Head'>
      <div className='Head-left'>
        <ProfilePhoto />
        <FullName /> 
      </div>
      <div className='Head-right'>
        <AboutMe />
      </div>
      
    </div>
  )
}

export default Head;