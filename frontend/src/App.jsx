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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />
      },
      {
        path: '/mail/:id',
        element: <Mail />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);

function App() {
  const { authUser } = useSelector(store => store.app);
  

  return (
    <div className='bg-[#F6F8FC] w-screen h-screen overflow-hidden'>
      {!authUser ? (
        <RouterProvider router={router} />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className='absolute w-[30%] bottom-0 right-20 z-10'>
            <SendEmail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
