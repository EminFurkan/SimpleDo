import React, {useState} from 'react';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = () => {
  const [displaySidebar, setDisplaySidebar] = useState(true);

  return (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <main>
        <Header
        displaySidebar={displaySidebar}
        setDisplaySidebar={setDisplaySidebar}
        />
        <Content
          displaySidebar={displaySidebar}
          setDisplaySidebar={setDisplaySidebar}
        />
      </main>
    </ProjectsProvider>
  </SelectedProjectProvider>
  );
}