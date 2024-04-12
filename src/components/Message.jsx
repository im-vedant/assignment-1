import React from 'react'
import Tags from './Tags'
import Suggestion from './Suggestion'

const Message = () => {
    const messages =[{
        messenger : 'bot',
        text : 'Hi Sam! I am your personal shopping assistant , how can i help you today ?',
        time : '4:45 PM'
    }, {
        messenger : 'user',
        text : 'I am looking for a hand bag, with long strap.',
        time  : '4:46 PM'
    }]
  return (
    <div className='w-full flex flex-col gap-5 px-[10px] pb-[10px] pt-[50px]'>
       {
        messages.map((message)=>{
            return <div className='flex flex-col gap-[5px]'>
                <div style={{backgroundColor : message.messenger === 'bot' ? '' : '#DCF7C5',
                backgroundImage : message.messenger === 'bot' ? 'linear-gradient(100deg, #E5EEFF 13.91%, #FFF 116.73%)' : '',
               marginLeft : message.messenger==='user' ? 'auto' : ''
                }} className={`w-[70%] p-[15px] rounded-[15px] `}>
                {
                    message.text
                }
                </div>
                <p style={{  marginLeft : message.messenger==='user' ? 'auto' : ''}} className='mx-[10px] text-[10px] text-[#333]'>{message.time}</p>
            </div>
        })
       }
       <Tags/>
       <Suggestion/>
    </div>
  )
}

export default Message