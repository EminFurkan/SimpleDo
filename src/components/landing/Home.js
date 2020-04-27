import React from 'react';
import { Navbar } from './Navbar';
import { Content } from './Content';
import '../../styles/Home.scss';
import '../../styles/Mobile.scss'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Content />
    </div>
  );
};
