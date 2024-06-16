import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Inbox from './components/Inbox';
import SendEmail from './components/SendEmail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Mail from './components/Mail';
import Body from './components/Body';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login';
import { auth } from './firebase';
import { setAuthUser } from './redux/appSlice';
import Signup from './components/Signup';






