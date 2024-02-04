// HorizontalTabs.js
import React, { useState } from 'react';
import './App.css';
import Charts from './Charts.js'

const Tabs = () => {
  const [tab, setTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setTab(tabNumber);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab ${tab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </div>
        <div
          className={`tab ${tab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>
        <div
          className={`tab ${tab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </div>
      </div>
      <div className="tab-content">
        {tab === 1 && <p>< Charts /></p>}
        {tab === 2 && <p>Content for Tab 2</p>}
        {tab === 3 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default Tabs;
