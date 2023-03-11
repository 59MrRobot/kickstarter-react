import React from 'react';
import './App.scss';
import { Benefits } from './components/Benefits';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Nav } from './components/Nav';
import { Presentation } from './components/Presentation';
import { AboutUs } from './components/AboutUs';
import { Technology } from './components/Technology';
import { Testimonials } from './components/Testimonials';
import { Features } from './components/Features';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <main>
        <Menu />

        <Nav />

        <Benefits />

        <Presentation />

        <AboutUs />

        <Technology />

        <Testimonials />

        <Features />
      </main>
    </div>
  );
}

export default App;
