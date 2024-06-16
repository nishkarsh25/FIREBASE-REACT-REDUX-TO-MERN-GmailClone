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
    
    
}

