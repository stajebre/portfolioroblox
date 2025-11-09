import React from 'react';
import logo from './logo.svg';
import './App.css';
import LiquidEther from './LiquidEther';
import GradientText from './GradientText';
import GlassSurface from './GlassSurface';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function GradText({ text, size }) {
  return (
    <div style={{ fontSize: size || "16px" }}>
      <GradientText
        colors={["#3d82bb", "#ffffff", "#3d82bb", "#ffffff", "#3d82bb"]}
        animationSpeed={3}
        showBorder={false}
        className="test"
      >
        {text}
      </GradientText>
    </div>
  );
}

function Home() {
  return <div style={{ width: '100%', height: '100vh', position: 'relative',   pointerEvents: 'none' }}>
      <GradText text="Stajebre's Portfilo" size='4.8vw' />
      <div className='maindiv' >
       <GlassSurface 
  width={'100%'} 
  height={'100%'}
  borderRadius={24}
  className="my-custom-class"
>
          <h2 className="welcometext">
            Welcome to Stajebre's Portfilo!
          </h2>
           
        </GlassSurface>
      </div>
    </div>
}

function Projects() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}


function App() {
  return (
    <BrowserRouter>
    <LiquidEther
        colors={['#95f3e9', '#40f0ff', '#443f9e']}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
      />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
