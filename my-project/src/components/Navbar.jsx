import React, { Component } from 'react';
import {logo} from '../assets'

class Navbar extends Component {
  render() {
    return (
      <nav className='relative flex justify-between items-center'>
        <div>
          <img src={logo} className='w-full h-full'/>
        </div>

        <div className='flex justify-between items-center'>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;