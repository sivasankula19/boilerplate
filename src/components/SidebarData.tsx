import React from 'react';
import * as VscIcons from 'react-icons/vsc';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Login',
  //   path: '/',
  //   icon: <IoIcons.IoLogInOutline />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Register',
  //   path: '/register',
  //   icon: <VscIcons.VscSignIn />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoIcons.IoLogOutOutline />,
    cName: 'nav-text'
  },
];