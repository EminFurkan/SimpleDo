import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = () => {
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <main className={ darkMode ? 'darkmode' : undefined }>
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
}