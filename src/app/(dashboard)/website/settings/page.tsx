import React from 'react'

const Settings = () => {
  return (
    <div className=' flex flex-col items-center justify-center w-full   h-[calc(100vh-120px)]'>
      <div className=' max-w-[593px] w-full'>
      <div className='  rounded-[16px] bg-white'>
        
        <div className=' flex items-center justify-between px-6 py-[20px] border-b border-b-[rgb(245,245,245)]'>
          <p className=' text-[20px] font-bold'>famous9.aiwebhero.com</p>
          <div className=' bg-[#D1FAEE]  rounded-[48px] flex items-center px-4 gap-2 py-3'>
                      <div className=' rounded-full w-1 h-1 bg-[#008950]'></div>
                        <span className=' text-[#008950] font-semibold text-xs'>available</span>
                    </div>
        </div>
        <div className='  px-6 py-[20px]'>
          <div className='rounded-[6px] p-2 bg-[#f9fafb] border flex items-center justify-between'>
          <div className=' bg-[#0330AE0F] text-sm rounded-[6px] font-medium text-[#00010399] py-[20px] px-5'>
            https://
          </div>
          <input className=' border-none bg-transparent outline-none shadow-none w-full h-full font-bold px-3' type="text" />
          <div className=' bg-[#0330AE0F] text-sm rounded-[6px] text-[#00010399] font-medium py-[20px] px-5'>
            .aiwebhero
          </div>

          </div>
          <div className=' text-[#00010380] mt-4 text-[13px]'>you can use letters (a-z), numbers (0-9), and  - (dash)</div>
        </div>
      </div>

      </div>
      <div className=' grow'></div>
      <div className=' flex gap-3 self-end'>
      <button  className='bg-[#0330AE0F] text-ai-button-blue font-bold text-sm py-[13px] px-[24px] rounded-[8px]'>Discard</button>

      <button className='bg-ai-button-blue font-bold text-[13px] py-[13px] text-sm px-[24px] rounded-[8px] text-white'>Save</button>
      </div>
        
    </div>
  )
}

export default Settings