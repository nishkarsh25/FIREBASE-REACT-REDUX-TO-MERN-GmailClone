import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import axios from 'axios';
import toast from 'react-hot-toast';

const SendEmail = () => {
    const [formData, setFormData] = useState({
        recipients: "",
        subject: "",
        message: ""
    })
    const { open } = useSelector(store => store.app);
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    

    
}

