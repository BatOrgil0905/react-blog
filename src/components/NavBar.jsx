import React from 'react';
import Profile from './images/Profile';

const NavBar = () => {
  return (
    <div className="w-full h-[50px] bg-white sticky top-0 flex items-center">
      <div className="flex-[3]">
        
      </div>
      <div className="flex-[6]">
        <ul>
            <li className="">Home</li>
            <li className="">Home</li>
            <li className="">Home</li>
            <li className="">Home</li>
        </ul>
      </div>
      <div className="flex-[3]">
        <Profile/>
      </div>
    </div>
  );
}

export default NavBar