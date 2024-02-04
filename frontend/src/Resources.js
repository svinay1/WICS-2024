import './App.css';
import { useState, useEffect } from 'react';

const Resources = () => {
    const [currAdvice, setCurrAdvice] = useState('budgeting');
    const [text1, setText1] = useState();
    const [text2, setText2] = useState();
    const [text3, setText3] = useState();

    useEffect(() => {
        // Set initial advice when the component mounts
        if (currAdvice === 'budgeting') {
            setText1("1. Track Your Expenses: Start by keeping track of all your expenses over a month. Notice any patterns?");
            setText2("2. Set Clear Goals: Establish short-term and long-term financial goals to guide your budgeting efforts.");
            setText3("3. Prioritize and Adjust: Prioritize your needs first when allocating funds in your budget.");
        } else {
            setText1("1. Diversify Your Portfolio: Spread your investments across different asset classes to reduce risk.");
            setText2("2. Invest for the Long Term: Instead of trying to time the market, focus on holding quality investments.");
            setText3("3. Educate Yourself: Take the time to learn about investment options, strategies, and risk factors.");
        }
    }, [currAdvice]);

    const changeAdvice = () => {
        // Toggle advice type when the button is clicked
        setCurrAdvice(currAdvice === 'budgeting' ? 'investing' : 'budgeting');
    };

    return (
        <header className="resBackgroundBox"> 
                <subheadingS> Beginner’s Guide to Girl Math </subheadingS>
                <div>
                    <button onClick={changeAdvice} className = "tips-send-button" type="button">Budgeting</button>
                    <button onClick={changeAdvice} className = "tips-send-button"type="button">Investing</button>
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
