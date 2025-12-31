import './App.css';
import LiquidEther from './LiquidEther';
import GradientText from './GradientText';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import SplitText from "./SplitText";
import Shuffle from './Shuffle';
import GlobalStock from './Videos/GlobalStock.mp4';
import RanksSystem from './Videos/Ranks.mp4'
import { clamp } from 'three/src/math/MathUtils.js';

function GradText({ text, size }) {
  return (
    <div style={{ fontSize: size || "16px" }}>
      <GradientText
        colors={["#3d82bb", "#252266", "#3d82bb", "#252266", "#3d82bb"]}
        animationSpeed={10}
        showBorder={false}
        className="test"
      >
        {text}
      </GradientText>
    </div>
  );
}

function GlobalStockvid() {
  return (
    <div style={{ pointerEvents: "all", with: 'auto', height: "auto" }}>
      <video
        width="97%"
        height="auto"
        controls
        pointerEvents="all"
        muted={false}
      >
        <source src={GlobalStock} type="video/mp4" />
      </video>
    </div>
  );
}

function RanksSystemvid() {
  return (
    <div style={{ pointerEvents: "all", with: 'auto', height: "auto" }}>
      <video
        width="97%"
        height="auto"
        controls
        pointerEvents="all"
        muted={false}
      >
        <source src={RanksSystem} type="video/mp4" />
      </video>
    </div>
  );
}
/* creates buton*/
function ModernButton({ text, to }) {
  const navigate = useNavigate();
  return (
    <button className="animated-button" onClick={() => navigate(to)}>
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
      <span className="text">{text}</span>
      <span className="circle" />
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </button>
  );
}
// ToS here
const TOS = () => {
  return (
    <div
      className='scroll'
      style={{
        maxWidth: "80%",
        height: "clamp(50%, 55%, 60%)",
        margin: "0",
        top: "0px",
        fontFamily: "Arial, sans-serif",
        pointerEvents: "all",
        color: "white",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Roblox Scripting Services - Terms of Service</h1>
      <div
        style={{
          height: "80%",
          overflowY: "auto",
          border: "2px solid rgb(0, 183, 255)",
          borderRadius: "8px",
          background: "rgba(0, 4, 255, 0.15)",
          display: "flex",
          flexDirection: "column",
        }}
      >

        <ol style={{ paddingLeft: "20px", margin: 0, }}> {/* ToS here */}
          <li>
            <strong>Services:</strong>
            <p>I provide custom Roblox scripts (game mechanics, GUIs, automation, etc.). By commissioning me, you agree to these terms.</p>
          </li>

          <li>
            <strong>Payments:</strong>
            <ul>
              <li>A first payment (deposit) is required before I start your project.</li>
              <li>The remaining payment is due upon completion unless you choose to cancel the project.</li>
              <li>If the project is canceled after work has started, partial refunds may be given depending on the work done.</li>
              <li>Payments are non-refundable for completed work unless otherwise agreed.</li>
              <li>I expect tax to be covered by you unless otherwise agreed.</li>
            </ul>
          </li>

          <li>
            <strong>Code Ownership:</strong>
            <ul>
              <li>You own the scripts after full payment.</li>
              <li>You cannot resell or redistribute my code without permission.</li>
              <li>I may use parts of the scripts for my portfolio or personal showcase unless you request confidentiality.</li>
              <li>If the scripts control part of ur game(example ui), I may request to use that as showcase on portfolio. You can request not to before the project starts.</li>
            </ul>
          </li>

          <li>
            <strong>Revisions & Bug Fixes:</strong>
            <ul>
              <li>I offer free bug fixes for issues in the original script if there is no changes made. If u need small changes you may ask.</li>
              <li>Compatibility revisions with other systems not mentioned at the start are not included.</li>
              <li>Please provide all system requirements upfront; I am not responsible for problems caused by unmentioned systems or later modifications. I may only start after being provided with all required systems if any.</li>
            </ul>
          </li>

          <li>
            <strong>Project Delivery:</strong>
            <ul>
              <li>Delivery times depend on project complexity. I will keep you updated on progress if requested.</li>
              <li>If you are unsatisfied, we can discuss adjustments, but major changes may cost extra.</li>
            </ul>
          </li>

          <li>
            <strong>Cancellation:</strong>
            <ul>
              <li>You may cancel anytime before I've made progres to match the deposit ammount.</li>
              <li>If I stop working on a project(cancel it my self), I may return a portion of your payment for work not done. If I have made progress that match the first payment you may have the code made so far.</li>
              <li>If you are unresponsive for more than 7 days without notice, your commission may be canceled without a refund.</li>
            </ul>
          </li>

          <li>
            <strong>Bug Fixing Services:</strong>
            <ul>
              <li>You need to provide the place with the bug, I check it out and after fixing you pay and recive the fixed version afterwards.</li>
              <li>I may only work on my own version of your place/expirience that I delete after you recive fixed version.</li>
              <li>If my fix coused another bug to apear, I may look into it and fix it if I think it's due to my script/code.</li>
            </ul>
          </li>

          <li>
            <strong>Liability:</strong>
            <ul>
              <li>Scripts are provided “as-is.” I am not responsible for any misuse, Roblox bans, or losses caused by the scripts.</li>
              <li>I am not responsible for Roblox API changes, though I will do my best to ensure the scripts still work.</li>
            </ul>
          </li>

          <li>
            <strong>Agreement:</strong>
            <ul>
              <li>By commissioning me, you agree to all these terms.</li>
              <li>I may update these terms at any time; continued use of my services constitutes acceptance of changes.</li>
            </ul>
          </li>
        </ol>
      </div>

      <p style={{ marginTop: "15px", fontStyle: "italic", textAlign: "center" }}>
        Thanks for reading! Following these terms helps make our work smooth and successful.
      </p>
    </div>
  );
};

function Home() {
  return <div style={{ width: '100vw', height: '100vh', pointerEvents: 'none' }}>
    <GradText text="Stajebre's Portfilo" size='4.8vw' />
    <div className='maindivhome' >

      <SplitText /* Theese next lines are functions to create elemtns of the text that slowly comes up really cool effect, will be shown in live example*/
        text="Hey! Stajebre here, full stack developer with 2-3 years outside of Roblox and about 2 years in Roblox Studio. I make games perform better, mainly a scripter and I have some experience in other categories of Roblox Studio."
        tag="h1"
        className="welcometext"
        style={{ width: "60%", marginBottom: "15px", color: "white" }}
        splitType="words"
      />

      <SplitText
        text="I specialize in modular, efficient and optimized systems, What I do and not limited to:"
        tag="h1"
        style={{ marginBottom: "5px", marginTop: "3px", color: "white" }}
        splitType="words"
      />

      <SplitText text="UI scripting" tag="h2" style={{ color: "white" }} splitType="chars" /> {/* Theese next lines are functions to create elemtns of the text that slowly comes up really cool effect, will be shown in live example*/}
      <SplitText text="Server scripting" tag="h2" style={{ color: "white" }} splitType="chars" />
      <SplitText text="Cross server communication" tag="h2" style={{ color: "white" }} splitType="chars" />
      <SplitText text="Global stock" tag="h2" style={{ color: "white" }} splitType="chars" />
      <SplitText text="Custom randomness systems that don't depend on seeds" tag="h2" style={{ color: "white" }} splitType="chars" />
      <SplitText text="Randomness in general" tag="h2" style={{ color: "white" }} splitType="chars" />
      <SplitText text="And much more" tag="h2" style={{ color: "white" }} splitType="chars" />
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        marginBottom: "1%",
        top: "auto",
      }}>
        <ModernButton text="Projects" to="/Projects" />
        <ModernButton text="Pricing" to="/Pricing" />
      </div>
    </div>
  </div>
}

function Projects() {
  return <div className='maindiv' >
    <SplitText
      text="Pojects"
      tag="h1"
      className="BigText"
      splitType="chars"
    />
    <div className="contentinner" style={{ height: "70%", with: "100%", overflowY: "auto" }}>
      <SplitText
        text="Global Stock Project:"
        tag="h1"
        splitType="chars"
      />
      <GlobalStockvid />
      <SplitText
        text="Ranks System:"
        tag="h1"
        splitType="chars"
      />
      <RanksSystemvid />
      <SplitText
        text="Thats it for now, more coming soon!"
        tag="h1"
        style={{ marginBottom: "5px", marginTop: "3px", color: "white" }}
        splitType="chars"
      />
    </div>
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
      marginBottom: "1%",
      top: "auto",
    }}>
      <ModernButton text="Home" to="/" />
      <ModernButton text="Pricing" to="/Pricing" />
    </div>
  </div>
}


function Pricing() {
  return <div className='maindiv' style={{ height: "94vh", marginTop: "0px", top: "3vh", }} >
    <Shuffle
      tag="h2"
      text="Pricing:"
      shuffleDirection="right"
      duration={1}
      animationMode="evenodd"
      shuffleTimes={1}
      ease="power3.out"
      stagger={0.03}
      threshold={0.1}
      respectReducedMotion={true}
      loop={true}
    />
    <SplitText text="Small scripts: 250 to 650 Robux" tag="h2" style={{ color: "white" }} splitType="chars" />
    <SplitText text="Medium scripts: 1k to 3k Robux" tag="h2" style={{ color: "white" }} splitType="chars" />
    <SplitText text="Large scripts: 5k to 10k+ Robux" tag="h2" style={{ color: "white" }} splitType="chars" />
    <SplitText text="I prefer to do medium or large scripts, these are the usual prices but it depends on your specific needs." tag="h2" style={{ color: "white" }} splitType="words" />
    <SplitText text="Interested? Dm me the details on discord @stajebre." tag="h1" style={{ color: "white" }} splitType="words" />

    <TOS />
    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      position: "absolute",
      bottom: 0,
      marginBottom: "1%",
      top: "auto",
    }}>
      <ModernButton text="Home" to="/" />
      <ModernButton text="Projects" to="/Projects" />
    </div>
  </div>
}
function App() {
  return (
    <BrowserRouter>
      <LiquidEther
        mouseForce={40}
        cursorSize={40}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.225}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={1100}
        autoRampDuration={0.6}
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, background: "#060010" }} 
      />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
