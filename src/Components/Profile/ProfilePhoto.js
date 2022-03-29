import React from 'react';
import Image from './photoProfile.jpg';
import './ProfilePhoto.css';

function ProfilePhoto() {
  return (
    <div className='ProfilePhoto'>
        <img src={Image} alt='profileImg'/>
    </div>
  )
}

export default ProfilePhoto;