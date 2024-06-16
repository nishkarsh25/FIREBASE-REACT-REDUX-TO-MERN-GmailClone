import React, { useState } from 'react'
import { MdCropSquare } from "react-icons/md";
import { FaCaretDown,FaUserFriends } from "react-icons/fa";
import { IoMdRefresh, IoMdMore } from "react-icons/io";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight,MdInbox } from "react-icons/md";
import { GoTag } from "react-icons/go";
import Messages from './Messages';
import { useSelector } from 'react-redux';

const mailType = [
    {
        icon:<MdInbox size={"20px"}/>,
        text:"Primary",
    },
    {
        icon:<GoTag size={"20px"}/>,
        text:"Promotions",
    },
    {
        icon:<FaUserFriends size={"20px"}/>,
        text:"Social",
    },
];

const Inbox = () => {
    const [mailTypeSelected, setMailTypeSelected] = useState(0);
    const {emails} = useSelector(store=>store.app);
    
    return (
        <div className='flex-1 bg-white rounded-xl mx-5'>
            <div className='flex items-center justify-between px-4'>
                <div className='flex items-center gap-2 text-gray-700 py-2'>
                    <div className='flex items-center gap-1'>
                        <MdCropSquare size={"20px"} />
                        <FaCaretDown size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoMdRefresh size={"20px"} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoMdMore size={"20px"} />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-sm text-gray-500'>1-50 of {emails?.length}</p>
                    <button disabled={false} className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowLeft size={"24px"} /></button>
                    <button disabled={false} className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowRight size={"24px"} /></button>
                </div>
            </div>
            
                
            </div>
        </div>
    )
}

