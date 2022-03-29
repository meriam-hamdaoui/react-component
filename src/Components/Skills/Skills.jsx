import React from 'react';
import Dot from './dot_net_certif.jpg';
import Java from './java_certif.jpg';
import Soft from './softskills.jpg';
import Data from './data_algo_certif.jpg';
import './Skills.css'


function Skills() {
  return (
    <div className='Skills'>
        <div className='h1'>
            <h1>Certificates</h1>
        </div>
        <div className='certificates'>
        <img className='certif' src={Dot} alt=".net certif"/>
        <img className='certif' src={Java} alt="jee certif"/>
        <img className='certif' src={Soft} alt="softskills certif"/>
        <img className='certif' src={Data} alt="data-algo certif"/>
        </div>
        
    </div>
  )
}

export default Skills;