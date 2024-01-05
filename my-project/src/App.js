import React, { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className='bg-[#041827] overflow-hidden w-full scroll-smooth'>
        <div className='flex justify-center items-center'>
          <div className='w-full'>
            <Navbar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;