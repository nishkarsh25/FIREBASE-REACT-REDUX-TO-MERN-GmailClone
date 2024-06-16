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

  
  

  
};


