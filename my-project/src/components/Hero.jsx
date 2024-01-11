import React, { Component } from 'react';
import { vid } from '../assets';

class Hero extends Component {
  render() {
    return (
      <div className='relative flex flex-col'>
        <div className='flex flex-col'>
          <p>One of the most important<br/>
            pieces of the great product<br/>
            experience is you.  
          </p>
          <p>
          A creative agency that crafting a digital experience.
          </p>
        </div>
        <div>
          <video controls>
            <source src={vid} type='video/mp4'/>
          </video>
        </div>
      </div>
    );
  }
}

export default Hero;