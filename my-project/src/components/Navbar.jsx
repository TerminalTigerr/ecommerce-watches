import React, { Component } from 'react';
import {logo} from '../assets'
import { navLinks } from '../helpers/static';

class Navbar extends Component {
  render() {
    return (
      <nav className='relative flex justify-between items-center p-8'>
        <div>
          <img src={logo} className='w-full h-full'/>
        </div>

        <div className='flex justify-between items-center'>
          <ul className='flex justify-between items-center'>
            {navLinks.map((link) =>  
              <li key={link.id} className=' font-poppins text-white flex justify-between'>
                <a href={`#`}>{link.title}</a>
              </li>
            )}
          </ul>
        </div>

        <div className='bg-white rounded-xl px-5 py-3'>
          <a href='#' className=' font-poppins text-black' >Start a Project?</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;