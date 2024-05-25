import React from 'react'
import Profile from '../profile.png'

function ProfileImage() {
  return (
    <div className="profile-image w-48 h-48 bg-gray-300 rounded-full mx-auto mt-8 md:w-64 md:h-64">
      {Profile}
    </div>
  )
}

export default ProfileImage