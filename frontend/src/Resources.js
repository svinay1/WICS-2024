import './App.css';
import { useState, useEffect } from 'react';

const Resources = () => {
    const [currAdvice, setCurrAdvice] = useState(1);
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
    const [text3, setText3] = useState();
  
    const changeAdvice = () => {
        if (currAdvice) {
            setText1("Track Your Expenses: Start by keeping track of all your expenses over a month. Notice any patterns?");
            setText2("Set Clear Goals: Establish short-term and long-term financial goals to guide your budgeting efforts.");
            setText3("Prioritize and Adjust: Prioritize your needs first when allocating funds in your budget.");
            setCurrAdvice(false);
      } else {
            setText1("Diversify Your Portfolio: Spread your investments across different asset classes to reduce risk.");
            setText2("Invest for the Long Term: Instead of trying to time the market, focus on holding quality investments.");
            setText3("Educate Yourself: Take the time to learn about investment options, strategies, and risk factors. ");
        setCurrAdvice(true);
      }
    };

    return (
        <header className="missionBox"> 
                <h3>Tips & Tricks</h3>
                <div>
                    <button onClick={changeAdvice} type="button">Budgeting</button>
                    <button onClick={changeAdvice} type="button">Investing</button>
                </div>
                <header className="tips">
                <h2>{text1}</h2>
                </header>
                <header className="tips">
                <h2>{text2}</h2>
                </header>
                <header className="tips">
                <h2>{text3}</h2>
                </header>
            </header>
    );
};

export default Resources;
