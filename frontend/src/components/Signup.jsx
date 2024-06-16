import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/user/register', input, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      if(res.data.success)
        {
            navigate("/login")
            toast.success(res.data.message);
        }
    } catch (error) {
        toast.error(error.response.data.message);
      console.error(error.response.data.message);
    }
    setInput({
      fullname: '',
      email: '',
      password: '',
    });
  };

  
};


