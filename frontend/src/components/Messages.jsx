import React, { useEffect, useState } from 'react';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/appSlice';
import axios from 'axios';

const Messages = () => {
  const { searchText, emails, refresh } = useSelector(store => store.app);
  const [filterEmail, setFilterEmail] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/email/getallemails", {
          withCredentials: true,
        });
        const sortedEmails = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        dispatch(setEmails(sortedEmails));
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmails();
  }, [dispatch,refresh]);

  useEffect(() => {
      const filteredEmail = emails.filter((email) => {
        return (
          email.subject.toLowerCase().includes(searchText.toLowerCase()) ||
          email.to.toLowerCase().includes(searchText.toLowerCase()) ||
          email.message.toLowerCase().includes(searchText.toLowerCase())
        );
      });
      setFilterEmail(filteredEmail);
  }, [searchText, emails]);

  return (
    <div>
      {filterEmail.length > 0 ? (
        filterEmail.map((email) => <Message key={email.id} email={email} />)
      ) : (
        <p>No emails found</p>
      )}
    </div>
  );
};

export default Messages;
