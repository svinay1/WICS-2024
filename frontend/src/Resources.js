import './App.css';
import { useState, useEffect } from 'react';

const Resources = () => {
    const [currAdvice, setCurrAdvice] = useState(1);
  
    const changeAdvice = () => {
        if (currAdvice) {
            console.log("budgeting");
            setCurrAdvice(false);
      } else {
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
                <h2>a tip</h2>
                </header>
                <header className="tips">
                <h2>a tip</h2>
                </header>
                <header className="tips">
                <h2>a tip</h2>
                </header>
            </header>
    );
};

export default Resources;
