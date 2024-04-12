import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import { FaSlidersH } from "react-icons/fa";
const Filter = () => {
    const [currentFilter, setCurrentFilter]=useState(0)
    const data =["Strap - Long", "Colour", "Size","Brand","Material"]
    const [filter, setFilter]=useState(data)
    console.log(filter)
    console.log(currentFilter)
  return (
    <div className='flex flex-col gap-[10px] m-[10px] '>
        <div className='flex flex-row justify-between items-center'>
            <p className='text-[#949494] text-[13px]'>Select filters</p>
            <div className='text-[13px] text-[#666] flex flex-row items-center'>
                <FaSlidersH size={16} className='mr-[2px] font-normal'/>
                Filter
            </div>
        </div>
        <div className='flex flex-row flex-wrap gap-[10px]'>
        {
            filter.map((item,index)=>{
                return <div onClick={()=>setCurrentFilter(index)} key={index} className={`rounded-[5px] cursor-pointer border-[#4C82EF] bg-[#F6F9FF] ${currentFilter===index ? 'border text-[#4C82EF]  border-[#4C82EF]' : 'text-[#737373]'} flex flex-row items-center gap-[5px] px-[10px] py-[2px]`}>
                      <span>
                      {
                        item
                       }
                      </span>
                        <RxCross2 onClick={(e)=>{
                            e.stopPropagation()
                            setFilter(filter.filter((i)=>i!==item))
                            setCurrentFilter(0)                            
                            }} size={15}/>
                </div>
            })
        }
    </div>
    </div>
  )
}

export default Filter