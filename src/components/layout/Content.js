import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

export const Content = ({ displaySidebar, setDisplaySidebar }) => (
  <section className="content">
    <Sidebar
      displaySidebar={displaySidebar}
      setDisplaySidebar={setDisplaySidebar}
    />
    <Tasks />
  </section>
)