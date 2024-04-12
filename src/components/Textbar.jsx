import React from 'react'
import { FaPaperclip } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Logo from '../assets/Logo.png';
const Textbar = () => {
  return (
    <div className=' m-[10px] rounded-b-[14px] bg-textbarGradient p-[10px]'>
        <div className='flex flex-row gap-[5px] '>
           <div className='relative w-full'>
           <input type="text" placeholder='Type your message' className='text-[#949494] w-full relative pl-5 pr-[10px] py-3 rounded-xl text-[13px] ' />
           <FaPaperclip size={18} className='text-[#949494] absolute top-[12px] right-[10px]'/>
           </div>
           <div className='px-7 flex justify-center items-center w-fit bg-[#4C82EF] rounded-[10px]'>
            <FaChevronRight size={20} color='white'/>
           </div>
        </div>
        <div className='flex flex-row gap-[5px] mt-[10px] text-[13px] justify-center items-center'>
            <span className='text-[#B1B1B1]'>
                Powered by
            </span>
            <span className='text-[#7A7F8C] font-semibold'>
                Krunk.ai
            </span>
            <span>
                <img src={Logo} className='w-[18px] h-[18px]' alt="" />
            </span>
        </div>
    </div>
  )
}

export default Textbar