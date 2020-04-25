import React, { useState } from 'react';
import { Header } from './layout/Header';
import { Content } from './layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from '../context';
import '../styles/Main.scss';

export const Main = () => {
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main className={darkMode ? 'darkmode' : undefined}>
          <Header
            displaySidebar={displaySidebar}
            setDisplaySidebar={setDisplaySidebar}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <Content
            displaySidebar={displaySidebar}
            setDisplaySidebar={setDisplaySidebar}
            darkMode={darkMode}
          />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
