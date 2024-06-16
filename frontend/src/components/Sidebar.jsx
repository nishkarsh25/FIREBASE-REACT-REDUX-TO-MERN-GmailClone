import React, { useState } from 'react'
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import { MdOutlineWatchLater,MdOutlineKeyboardArrowDown,MdOutlineDrafts,MdInbox } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const sidebarItems = [
    {
        icon: <MdInbox size={"20px"} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStar size={"20px"} />,
        text: "Starred"
    },
    {
        icon: <MdOutlineWatchLater size={"20px"} />,
        text: "Snoozed"
    },
    {
        icon: <TbSend2 size={"20px"} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineDrafts size={"20px"} />,
        text: "Drafts"
    },
]

const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const dispatch = useDispatch();
    
}

