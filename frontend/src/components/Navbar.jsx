import React, { useEffect, useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Avatar from 'react-avatar';
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setSearchText } from '../redux/appSlice';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';


const Navbar = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { authUser } = useSelector(store => store.app);

  const signOutHandler = async() => {
    try {
      const res = await axios.get('http://localhost:8080/api/v1/user/logout')
      console.log(res)
      toast.success(res.data.message);
      dispatch(setAuthUser(null));
    } catch (error) {
      console.log(error)
    }
  }
  


  
}

