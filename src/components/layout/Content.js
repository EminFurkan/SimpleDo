import React from 'react';
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

export const Content = ({ displaySidebar, setDisplaySidebar, darkMode }) => (
  <section className="content">
    <Sidebar
      displaySidebar={displaySidebar}
      setDisplaySidebar={setDisplaySidebar}
    />
    <Tasks darkMode={darkMode} />
  </section>
)