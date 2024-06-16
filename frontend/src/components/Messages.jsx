import React, { useEffect, useState } from 'react';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/appSlice';
import axios from 'axios';

const Messages = () => {
  const { searchText, emails, refresh } = useSelector(store => store.app);
  const [filterEmail, setFilterEmail] = useState([]);
  const dispatch = useDispatch();

  

  

  
};


