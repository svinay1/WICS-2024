// import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { Link } from 'react-router-dom';
import barbieDoll from './entrepreneurBarbie.png';
import barbieDollLeft from './flippedBarbie.png';
import girlMathLogo from './GIRLMATHIcon.png';
import { useState, useEffect } from 'react';
import axios from "axios";
import ChartTabs from './ChartTabs';
import Resources from './Resources';

var prices = [];
function getPrices(stocks, symbols) {
  for (let i = 0; i < symbols.length; i++) {
      prices.push(symbols[i] + " : " + stocks[symbols[i]] + "\n");
      if (prices.length === symbols.length) {
        break;
      }
  }
  return prices;
}

function Home() {
  const scrollToHome = () => {
    // const homeElement = document.getElementById('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const scrollToStock = () => {
    const stockElement = document.getElementById('stock');
    stockElement.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToResources = () => {
    const resElement = document.getElementById('resources');
    resElement.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAbout = () => {
    const aboutElement = document.getElementById('about');
    aboutElement.scrollIntoView({ behavior: 'smooth' });
  };

  const [message, setMessage] = useState(null);

  useEffect(() => {
        axios.get('http://127.0.0.1:5000/current-price')
        .then(response => {
          setMessage(getPrices(response.data, ['BP', 'CVX', 'DKNG', 'HD', 'LMT', 'GS', 'GOOG', 'META', 'RBLX', 'TEAM'])); 
        })
        .catch(error => { console.error("Error fetching data:", error);
        });
    }, []);
  
  return (
    <div className="App">    
      <div id = "home">
        <header className="navbar">
        <a href="#home" onClick={scrollToHome}>
            <img src={girlMathLogo} alt="Girl Math Logo" className="gm-logo-header" />
        </a>
        {/* <img src={girlMathLogo} alt="Girl Math Logo" className="gm-logo-header" /> */}
        {/* <div className="logo">GirlMath</div> */}
        <nav>
          <ul>
            {/* <li><a href="https://google.com/">Stocks</a></li> */}
            <li><a href="#home" onClick={scrollToHome}>Home</a></li>
            <li><a href="#stocks" onClick={scrollToStock}>Stocks</a></li>
            <li><a href="#resources" onClick={scrollToResources}>Resources</a></li>
            <li><a href="#about" onClick={scrollToAbout}>About</a></li>
          </ul>
        </nav>
        
      </header>
      </div>
      {/* <h1>Hi Barbie!</h1> 
      <div className="m1"> 
        Welcome to Barbie’s Finance Dreamhouse. Let's do some girl math.
      </div>
      <img src={barbieDoll} alt="Barbie Logo" className="barbie-doll" />
      <img src={barbieDoll} alt="Barbie Logo" className="barbie-doll" /> */}

      {/* Add the left and right Barbie dolls */}
      {/* <div id="home"> */}
      <div className="barbie-dolls">
        {/* <img src={barbieDoll} alt="Barbie Doll" className="barbie-doll" /> */}
        <img src={barbieDollLeft} alt="Barbie Doll Left" className="barbie-doll" />
        {/* <h1>Girl Math</h1> */}
        <img src={girlMathLogo} alt="Girl Math Logo" className="gm-logo" />
        <img src={barbieDoll} alt="Barbie Doll" className="barbie-doll" />
        {/* <img src={barbieDoll} alt="Barbie Doll" className="barbie-doll" /> */}
      </div>
      {/* </div> */}
      <div className="m1"> 
        Hi Barbie! Welcome to your Finance Dreamhouse. Let's do some girl math.
      </div>

      <div id="stock">
        <h4> Stocks </h4>
        <ChartTabs />
        {<p>{message}</p>}
      </div>

      <div id="resources">
        <h4> Resources </h4>
        <Resources />
      </div>


      <div id = "about">
        <header className="missionBox"> 
            <h3>Our Mission</h3>
            <h2> To empower women to take control of their financial wellbeing in the pinkest way. We believe that everyone deserves to feel confident and capable in managing their personal finances. Through accessible information, interactive tools, and a supportive online community, we aim to provide women with the knowledge, skills, and confidence they need to make informed financial decisions, achieve their goals, and build wealth. </h2>
        </header>
      </div>
      
    </div>
  );
}

export default Home;
