import React from 'react'
import Link from 'next/link'
import  UserIcon  from '@/components/userIcon'


const chats = [
    {
        date: 'Today',
        chats: [
            {
                title: 'New Chat'
            }
        ]
    },
    {
        date: 'Previous 7 days',
        chats: [
            {
                title: 'Golf game'
            },
            {
                title: 'E-learning UI adventure'
            },
            {
                title: 'New Chat'
            }

        ]
    },
    {
        date: 'Previous 30 days',
        chats: [
            {
                title: 'Golf game'
            },
            {
                title: 'E-learning UI adventure'
            },
            {
                title: 'New Chat'
            }

        ]
    },
]

const AiSideBar = () => {
  return (
    <div className=' sticky w-[356px] dark:bg-[#12151C] left-0 h-screen flex flex-col bg-[#F8F8F8] pl-[46px] pr-2 py-8'>
        <button className=' flex mb-[67px] gap-2 items-center bg-transparent'>
            <div className=' rounded-full p-2 bg-[#202022]'>
            <svg width="8.589844" height="10.146973" viewBox="0 0 8.58984 10.147" fill="none" xmlns="http://www.w3.org/2000/svg" >
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<filter id="filter_1113_417_dd" x="0.000000" y="0.000000" width="8.589844" height="10.146973" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
			<feFlood flood-opacity="0" result="BackgroundImageFix"/>
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dx="0" dy="0.127954"/>
			<feGaussianBlur stdDeviation="0.523364"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.52 0"/>
			<feBlend mode="normal" in2="shape" result="effect_innerShadow_1"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dx="0" dy="0.116591"/>
			<feGaussianBlur stdDeviation="0.0479318"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.80392 0 0 0 0 0.81176 0 0 0 0 1 0 0 0 1 0"/>
			<feBlend mode="normal" in2="effect_innerShadow_1" result="effect_innerShadow_2"/>
			<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
			<feOffset dx="0" dy="0.155455"/>
			<feGaussianBlur stdDeviation="0.928841"/>
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
			<feColorMatrix type="matrix" values="0 0 0 0 0.11373 0 0 0 0 0.12941 0 0 0 0 0.16078 0 0 0 0 0"/>
			<feBlend mode="normal" in2="effect_innerShadow_2" result="effect_innerShadow_3"/>
		</filter>
	</defs>
	<g filter="url(#filter_1113_417_dd)">
		<path id="Vector" d="M7.21875 8.64075C7.19141 8.56598 7.09766 8.54474 7.03516 8.59589C6.29297 9.21149 5.33594 9.58234 4.29297 9.58234C3.19141 9.58234 2.1875 9.16962 1.43359 8.49231C1.375 8.44208 1.28906 8.45435 1.25 8.52045C0.976562 9.02545 0.796875 9.56085 0.6875 9.96704C0.652344 10.0939 0.445312 10.0914 0.421875 9.96179C0.242188 8.8642 -0.0742188 6.66064 0.015625 5.08734C0.109375 3.46954 0.703125 1.26331 1.02734 0.148987C1.06641 0.0214844 1.28125 0.0467529 1.29688 0.178589C1.35547 0.648193 1.47656 1.27631 1.72656 1.8595C1.75781 1.92657 1.83984 1.94818 1.89844 1.90741C2.58203 1.4491 3.40625 1.18121 4.29297 1.18121C5.18359 1.18121 6.01172 1.45093 6.69531 1.91211C6.75391 1.95294 6.83594 1.93152 6.86719 1.86444C7.12891 1.25244 7.25 0.590332 7.30469 0.113403C7.32031 -0.0165405 7.52734 -0.0443726 7.56641 0.0801392C7.89453 1.09387 8.49219 3.11145 8.57812 4.59851C8.67969 6.37036 8.14453 8.82806 7.83984 10.059C7.80859 10.1893 7.58594 10.1691 7.56641 10.0361C7.51172 9.63568 7.40625 9.13123 7.21875 8.64075ZM1.44922 6.01306C1.84375 5.14996 3.53906 6.60168 4.00781 7.02509C4.06641 7.07904 4.05078 7.17236 3.97656 7.20477C3.61719 7.36328 2.69141 7.72009 2.10938 7.46149C1.53516 7.20691 1.15234 6.65375 1.44922 6.01306ZM4.57812 7.20477C4.50391 7.17236 4.48828 7.07904 4.54688 7.02509C5.01562 6.60168 6.71094 5.14996 7.10938 6.01306C7.40234 6.65375 7.01953 7.20691 6.44531 7.46149C5.86328 7.72009 4.9375 7.36328 4.57812 7.20477Z" fill="#006DFF" fill-opacity="0.290000" fill-rule="evenodd"/>
		<path id="Vector" d="M4.57031 2.47504C4.58984 2.38495 4.5 2.31067 4.41406 2.34375L3.83984 2.56592C3.79688 2.58264 3.76562 2.62347 3.76562 2.66986L3.70312 4.18597C3.69922 4.27094 3.78516 4.33099 3.86328 4.29865L3.97266 4.25299C4.05078 4.22144 4.13672 4.27783 4.13672 4.36078L4.13672 5.07343C4.13672 5.20905 4.32812 5.23535 4.36328 5.10474L4.77344 3.63098C4.80078 3.54236 4.71875 3.46136 4.62891 3.4881L4.54297 3.51477C4.45703 3.54034 4.375 3.46698 4.39453 3.38068L4.57031 2.47504Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
	</g>
</svg>

            </div>
            <span className=' text-[#000103] dark:text-white font-bold'>
            New Chat   
            </span>
            </button>

            <div className=' h-[90%] overflow-scroll flex flex-col gap-[68px] remove-scrollbar'>
                {chats.map((chat, index) => {
                    return <div key={index} className=' flex flex-col gap-1'>
                        <p className=' text-[#00010361] text-[13px] font-bold dark:text-[#FFFFFF99]'>{chat.date}</p>
                        {chat.chats.map((chat, index) => {
                            return <Link className=' text-[#000103] font-semibold dark:text-white' href='#' key={index}>
                                {chat.title}
                            </Link>
                        })}

                    </div>
                })}
            </div>
            <div className=' flex items-center gap-6'>
                <UserIcon imageClass='p-2' />
                <span className=' text-[#000103] dark:text-white font-medium text-[13px]'>Ahmed Baharinm</span>
            </div>
        
    </div>
  )
}

export default AiSideBar