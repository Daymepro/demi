import { getInitials } from '@/utils/getInitials'
import React from 'react'

const UserImage = () => {
    const userImage = null
    const name = 'Atanda Uthman'
  return (
    <div>
        {userImage ? <img src="" alt="" /> : <span className=' bg-[#6B7280]  p-1 rounded-full text-white text-xs'>{getInitials(name)}</span> }
    </div>
  )
}

export default UserImage