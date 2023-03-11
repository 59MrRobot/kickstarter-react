import React from 'react';
import './App.scss';
import { Benefits } from './components/Benefits';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Nav } from './components/Nav';
import { Presentation } from './components/Presentation';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Menu />

        <Nav />

        <Benefits />

        <Presentation />
      </main>
    </div>
  );
}

export default App;
