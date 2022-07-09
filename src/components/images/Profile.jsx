import React from 'react'
import ProPic from "../images/propic.jpg"

const Profile = () => {
  return (
    <div className='w-[45px] h-[45px] rounded-full overflow-hidden'>
        <img className='w-full h-full bg-cover bg-center rounded-full' src={ProPic} alt="profile pic" />
    </div>
  )
}

export default Profile