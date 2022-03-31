import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import FullName from './FullName';
import './Head.css'
import AboutMe from './AboutMe';

const headStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'rgb(238, 231, 217)',
  paddingTop: '35px'
}

function Head() {
  return (
    <div style={headStyle} className='Head'>
      <div className='Head-left'>
        <ProfilePhoto />
        <FullName /> 
      </div>
      <div style={{font:'bold 21px Quicksand, serif', paddingTop: '15px'}} className='Head-right'>
        <AboutMe />
      </div>
      
    </div>
  )
}

export default Head;