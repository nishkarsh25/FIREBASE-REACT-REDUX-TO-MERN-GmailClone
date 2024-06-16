import React from 'react'
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedMail } from '../redux/appSlice';
import { motion } from 'framer-motion';

const Message = ({ email }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const openMail = () => {
        dispatch(setSelectedMail(email));
        navigate(`/mail/${email._id}`);
    }


    // Format the date to IST
    const options = {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    const formattedDate = new Date(email?.createdAt).toLocaleString('en-IN', options);

    
}

