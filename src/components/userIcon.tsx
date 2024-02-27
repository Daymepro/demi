import { useAuth } from '@/context/UserContext'
import { getInitials } from '@/utils/getInitials'
import clsx from 'clsx'
import React from 'react'

const UserImage = ({imageClass} : {imageClass?: string}) => {
  const {user} = useAuth()
    const userImage = null
    const name = `${user?.firstName} ${user?.lastName}` 
    console.log(user)
  return (
    <div>
        {userImage ? <img src="" alt="" /> : <span className={ clsx(' bg-[#6B7280]  p-1 rounded-full text-white text-xs', imageClass)}>{getInitials(name)}</span> }
    </div>
  )
}

export default UserImage