import React from 'react'
import BagsOnTimpuImg from '../assets/BagsOnTimpu.png'
import { FaAngleRight } from "react-icons/fa6";
import TickMark from '../assets/TickMark';
const Suggestion = () => {
  return (
   <div>
     <div className='w-[250px] flex flex-col gap-[10px] p-[10px] rounded-[20px] bg-suggestionGradient '>
        <div className='px-[15px] flex flex-row gap-[10px] py-[10px] rounded-[10px] bg-white'>
            <img src={BagsOnTimpuImg} alt="" className='w-[70px] h-[50px] rounded-[5px]'/>
            <div className='flex flex-col justify-between w-full'>
                <h3 className='font-medium text-[13px] text-[#333] flex flex-row gap-[4px] items-center'>Bags on Timpu

                    <TickMark />  
             
                </h3>
                <div className='flex flex-row items-center justify-between'>
                  <p className='text-nowrap text-xs text-[#949494]'>
                    1123 products
                  </p>
                  <FaAngleRight size={20} color='#949494' />
                </div>
            </div>
        </div>
        <p className='text-[13px] text-[#333] '>Or set filter and help us choose the best bag for you.</p>
        </div>
        <p className='text-[10px] text-[#333] mx-[10px] mt-[5px]'>4:48 PM</p>
   </div>
  )
}

export default Suggestion