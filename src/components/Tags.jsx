import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
const Tags = () => {
    const tags=["Clutch", "Fabric lining", "Baggit", "Multi Compartment"]
  return (
    <div>
        <h2 className='text-[#949494] text-[13px] mb-[10px]'>Popular tags for handbag</h2>
        <div className='flex flex-row items-center justify-between gap-[5px]'>
            
        <div className='flex flex-row gap-[10px] overflow-hidden'>
            {
                tags.map((tag, index)=>{
                    return <div className='px-[10px] border-[2px] w-fit text-[13px] text-nowrap font-medium text-[#4C82EF]  border-[#4C82EF] py-[5px] rounded-[5px] '>
                        {tag}
                    </div>
                })
            }

        </div>
        <div>
            <FaChevronRight size={24} className=" text-[#4C82EF]"/>
        </div>
        </div>
    </div>
  )
}

export default Tags