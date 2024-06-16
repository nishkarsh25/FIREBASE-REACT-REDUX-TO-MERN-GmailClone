import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/appSlice';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const dispatch =useDispatch()
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/login', input, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      if(res.data)
        {
            dispatch(setAuthUser(res.data.user))
            navigate("/")
            toast.success(res.data.message);
        }
    } catch (error) {
        toast.error(error.response.data.message);
      console.error(error.response.data.message);
    }
    setInput({
      email: '',
      password: '',
    });
  };

  
};


