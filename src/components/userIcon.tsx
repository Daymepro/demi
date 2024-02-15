import { getInitials } from '@/utils/getInitials'
import clsx from 'clsx'
import React from 'react'

const UserImage = ({imageClass} : {imageClass?: string}) => {
    const userImage = null
    const name = 'Atanda Uthman'
  return (
    <div>
        {userImage ? <img src="" alt="" /> : <span className={ clsx(' bg-[#6B7280]  p-1 rounded-full text-white text-xs', imageClass)}>{getInitials(name)}</span> }
    </div>
  )
}

export default UserImage