import React from 'react'

const SectionThree = () => {
  const style = {
    backgroundImage: 'url("/images/landing-section3-grid.svg"), url("/images/landing-section3-grid.svg")',
    backgroundPosition: "-7% 100%, 107% 100%",
    // backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }
  const style2 = {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
    filter : "blur(60px)"
    
  }
  return (
    <div  className='relative flex flex-col items-center justify-center bg-main-blue xl:px-[140px] md:px-10 px-0 pt-[106px] overflow-hidden'>
        <div className=' text-center font-bold text-5xl max-w-[400px] text-white'>
            The AI-Powered Website Editor
        </div>
        <div className='mt-[85px] z-20'>
          <img src="/images/landing-section3.png" alt="background image" />
        </div>
        <div style={style} className='z-10 absolute max-w-[1100px] h-5/6 w-11/12'>
        </div>
        <div style={style2} className='absolute top-48 max-w-[1100px] h-5/6 w-11/12'></div>
        <div>
        
        </div>
    </div>
  )
}

export default SectionThree