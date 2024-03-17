'use client'
import Link from 'next/link'
import React from 'react'
import UserImage from './userIcon'
import { usePathname, useRouter } from 'next/navigation'
import { Popover, PopoverContent } from './ui/popover'
import { PopoverTrigger } from '@radix-ui/react-popover'
import { LogOutIcon } from 'lucide-react'
import { useAuth } from '@/context/UserContext'


type Paths = {
  name: string,
  path: string
}

export type PathDetails = {
  pathname: string,
  paths: Paths[]
}

type DashboardTopBarProps = {
  pathIdentity: PathDetails 
}
const DashboardTopBar = (props: DashboardTopBarProps) => {
  const pathname = usePathname()
  const {logout} = useAuth()
  const pathSplit = pathname.split('/')[2]
  const router = useRouter()
  return (
    <>
    <div className=' flex z-20  border-b h-[55px] items-center pr-4'>
      <span className=' text-[1.4rem] mr-[54px] font-bold'>{props.pathIdentity.pathname}</span>

      <div className='flex  h-[70%] self-end w-fit gap-6 items-center justify-between'>

        {props.pathIdentity.paths.map((path) =>    <Link key={path.path}  href={path.path} className={` h-full ${pathSplit === path.path.split('/')[2] ? ' border-b-4 border-b-[#000103]' : ''}  text-[12px] text-[#abac9d] font-bold`}>
        {path.name}
      </Link> )}
      </div>
      <div className=' grow'></div>
      <div className=' flex items-center gap-3'>
        <span className=' bg-[rgba(3,49,174,0.03)] rounded-lg text-[#0030AD] p-2 font-semibold text-sm'>Free plan</span>
        <div className=' w-4 h-4 flex items-center justify-center rounded-full border border-ai-button-blue'>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 21" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.13251 12.107H0.657201C0.505506 12.107 0.358479 12.0546 0.241069 11.9585C-0.0398486 11.7287 -0.0812684 11.3147 0.148553 11.0337L8.97811 0.241085C9.14723 0.0343676 9.42463 -0.0494423 9.67992 0.0290578C10.0268 0.135735 10.2216 0.503452 10.1149 0.850371L7.86638 8.16265H12.3427C12.4945 8.16265 12.6415 8.21515 12.7589 8.31124C13.0398 8.5411 13.0812 8.95514 12.8513 9.23602L4.02075 20.0268C3.85162 20.2335 3.57421 20.3173 3.31895 20.2387C2.97204 20.132 2.77732 19.7643 2.88402 19.4174L5.13251 12.107Z" fill="#0030AD"/>
</svg>
        </div>
        <Popover>
          <PopoverTrigger><UserImage /></PopoverTrigger>
          <PopoverContent className=' w-fit'>
            <div onClick={() => {logout(); router.push('/signin') }} className=' cursor-pointer flex items-center gap-3 justify-between'>
              <span className=' text-sm'>Logout</span>
              <LogOutIcon className=' w-4 h-4' />
            </div>
          </PopoverContent>
        </Popover>
        
      </div>

    </div>
    </>
  )
}

export default DashboardTopBar