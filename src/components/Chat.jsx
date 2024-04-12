import React from 'react'
import Topbar from './Topbar'
import Message from './Message'
import Filter from './Filter'
import Textbar from './Textbar'

const Chat = () => {
  return (
    <div className='max-w-[380px] h-full w-full border-[7px] rounded-[20px] bg-white '>
        <Topbar/>
        <Message/>
        <Filter/>
        <Textbar/>
    </div>
  )
}

export default Chat