import React from 'react'
import SideBar from '../components/SideBar'
import SinglePost from '../components/SinglePost'

const Single = () => {
  return (
    <div className='flex'>
        <SinglePost/>
        <SideBar/>
    </div>
  )
}

export default Single