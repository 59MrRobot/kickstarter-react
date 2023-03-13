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
import { Questions } from './components/Questions';
import { Footer } from './components/Footer';
import { useSelector } from 'react-redux';

const body = document.getElementById("body");

const App: React.FC = () => {
  const showMenu = useSelector((state: any) => state.showMenu);


  if (showMenu && body) {
    body.style.overflow = 'hidden';
  } 
  
  if (!showMenu && body){
    body.style.overflow = 'visible';
  }
  
  return (
    <div className="App" id="page-top">
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

        <Questions />
      </main>

      <Footer />
    </div>
  );
}

export default App;
