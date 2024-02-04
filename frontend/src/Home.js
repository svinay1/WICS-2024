// import logo from './logo.svg';
import './App.css';
import React from 'react';
//import { Link } from 'react-router-dom';
import barbieDoll from './entrepreneurBarbie.png';
import barbieDollLeft from './flippedBarbie.png';
import girlMathLogo from './gmlogo2.png';
import socialMedia from './socialMedia.png';
import { useState, useEffect } from 'react';
import axios from "axios";
import ChartTabs from './ChartTabs';
import Resources from './Resources';
import Chatbot from './Chatbot'

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

  /*const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);*/

  useEffect(() => {
        axios.get('http://127.0.0.1:5000/current-price')
        .then(response => {
          setMessage(getPrices(response.data, ['BP', 'CVX', 'DKNG', 'HD', 'LMT', 'GS', 'GOOG', 'META', 'RBLX', 'TEAM'])); 
        })
        .catch(error => { console.error("Error fetching data:", error);
        });
    }, []);

  /*const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post(`http://127.0.0.1:5000/get_response`, {}, { params: {
          input: userInput
        }})
        .then(response => setBotResponse(response.data.response))
        .catch(err => console.warn(err));
      } catch (error) {
        console.error('Error fetching response:', error);
      }
      setFormSubmitted(true);
    };*/
  
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
        <header className="backgroundBox">
            <subheadingS> Investment Forecast</subheadingS>
              <blurb>  
                Here are our recommended investments for today and why. 
                We closely track each stock's trend, emphasizing those with 
                lower prices compared to historical trends. We believe these 
                companies will yield high returns.
              </blurb>
              < boxText >
                • Chevron: Our recommended investment due to its strong market performance and promising future growth prospects.
              </boxText>
              < boxText >
                • Goldman Sachs: Considered as a favorable investment choice due to its stability and resilience in the market.
              </boxText>
              < boxText >
                • Atlassian: An emerging investment opportunity with significant growth potential and a unique market position.
              </boxText>
          </header>
          <header className="backgroundBox">
            <subheadingS> Real-Time Market</subheadingS>
              <ChartTabs />
              {<p>{message}</p>}
          </header>
          <header className="backgroundBox">
            <subheadingS> Current Events</subheadingS>
              <blurb>  
                At Girl Math, it's important to note that we are not certified brokers or financial advisors. While we provide recommendations, 
                we strongly advise conducting your own research before making any investment decisions. We cannot be held liable for any loss of assets. 
                We've included links to relevant stories below to assist you further in your analysis and decision-making.
              </blurb>
              <links>
                <ul>
                  <li2><a href="hhttps://www.bbc.com/news/business-68156239">• BBC News - 'I make less than the minimum wage from running my post office'</a></li2>
                  <li2><a href="https://www.nytimes.com/interactive/2023/business/college-payment-loans.html">• The New York Times - How do I Pay for College?</a></li2>
                  <li2><a href="https://www.cnn.com/cnn-underscored/money/do-i-need-a-financial-advisor">• CNN - Do I need a financial advisor?</a></li2>
                  <li2><a href="https://www.theguardian.com/money/2024/feb/03/uk-savings-benefits-extra-cash-premium-bond-prizes-accounts">• The Guardian - UK savings and benefits: are you missing out on free cash?</a></li2>
                  <li2><a href="https://www.reuters.com/markets/wealth/kids-college-here-is-how-save-car-insurance-2024-01-30/">• Reuters - Kids in college? Here is how to save on car insurance</a></li2>
                  {/* <li2><a href="link">• Name</a></li2> */}
                </ul>
              </links>
          </header>
      </div>

      <div id="resources">
        <h4> Resources </h4>
        <Resources />
            <header className="resBackgroundBox">
                <subheadingS> Resource Hub</subheadingS>
                <blurb>  
                    Here's a collection of different media and resources to help you with finance.
                </blurb>
                <links>
                    <ul2>
                        <blurbBold>Websites (Courses):</blurbBold>
                        <li2><a href="https://www.clevergirlfinance.com/">• Clever Girl Finance</a></li2>
                        <li2><a href="https://www.getrichslowly.org/">• Get Rich Slowly</a></li2>
                        <blurbBold>Apple Podcasts:</blurbBold>
                        <li2><a href="https://podcasts.apple.com/us/podcast/life-kit-money/id1461493575">• Life Kit: Money</a></li2>
                        <li2><a href="https://podcasts.apple.com/us/podcast/money-girls-quick-and-dirty-tips-for-a-richer-life/id209859739">• Money Girl's Quick and Dirty Tips for a Richer Life</a></li2>
                        <li2><a href="https://podcasts.apple.com/us/podcast/the-part-time-money-podcast/id411841333">• Part Time Money Podcast</a></li2>
                        {/* <li2><a href="link">• Name</a></li2> */}
                        <blurbBold>Books:</blurbBold>
                        <li2><a href="https://www.amazon.com/Girls-That-Invest-Financial-Independence/dp/111989378X/ref=asc_df_111989378X/?tag=hyprod-20&linkCode=df0&hvadid=598354936952&hvpos=&hvnetw=g&hvrand=
                        809887423465775058&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9028280&hvtargid=pla-1648382746791&psc=1&mcid=b0c9b77c4303346da36b346619022300&gclid=CjwKCAiAiP2tBhBXEiwAC
                        slfnlEzvQJSzRIh29750AH_FO_Df6bd8_3cLEX-LUJn0VluXx9eO05qrxoCjtAQAvD_BwE">• Girl that Invest</a></li2>
                        <li2><a href="https://podcasts.apple.com/us/podcast/money-girls-quick-and-dirty-tips-for-a-richer-life/id209859739">• Money Girl's Quick and Dirty Tips for a Richer Life</a></li2>
                        <li2><a href="https://www.amazon.com/BYE-Student-Loan-Debt-Eliminating-ebook/dp/B0787CGZ9C/?_encoding=UTF8&pd_rd_w=3ww0m&content-id=amzn1.sym.cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_p
                        =cf86ec3a-68a6-43e9-8115-04171136930a&pf_rd_r=132-6508663-2595020&pd_rd_wg=Urxmr&pd_rd_r=51a79480-1833-4d99-a1f7-5b5921536715&ref_=aufs_ap_sc_dsk">• BYE Student Loan Debt</a></li2>

                        <blurbBold>YouTube:</blurbBold>
                        <li2><a href="https://youtu.be/wmkWMaGuTBQ?si=7yd2QtCvK35YKn4Z">• 8 Money Habits That Keep You Poor (STOP SELF SABOTAGE)</a></li2>
                        <li2><a href="https://youtu.be/cnjnJYr-8dk?si=CidEZMxoAbtfmoUc">• How to Start Investing as a Beginner</a></li2>
                        <li2><a href="https://www.youtube.com/watch?v=jNiJW8t0bcE">• 8 Passive Income Ideas</a></li2>

                    </ul2>
                </links>
            </header>
      </div>

      <div>
        <h4> Chatbot </h4>
        <Chatbot />
      </div>

      <div id = "about">
            <header className="missionBox"> 
                <h3>Our Mission</h3>
                <h6> To empower women to take control of their financial wellbeing in the pinkest way. We believe that everyone deserves to feel confident and capable in managing their personal finances. Through accessible information, interactive tools, and a supportive online community, we aim to provide women with the knowledge, skills, and confidence they need to make informed financial decisions, achieve their goals, and build wealth. </h6>
            </header>
            <img src={socialMedia} alt="Social Media" className="social-media" />
      </div>

      <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 GirlMath LLC. All rights reserved.</p>
            </div>
        </footer>
      
    </div>
  );
}

export default Home;
