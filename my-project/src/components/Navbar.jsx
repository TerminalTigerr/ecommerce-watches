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

        <div className='flex justify-between items-center gap-12'>
          <ul className='flex justify-between items-center gap-8'>
            {navLinks.map((link) =>  
              <li key={link.id} className=' font-poppins text-base font-medium'>
                <a href={`#`} className=' text-white'>{link.title}</a>
              </li>
            )}
          </ul>
          <div className='bg-white rounded-full px-10 py-4 '>
          <a href='#' className='font-poppins text-primary font-medium'>Start a Project?</a>
          </div>
        </div>

        
      </nav>
    );
  }
}

export default Navbar;