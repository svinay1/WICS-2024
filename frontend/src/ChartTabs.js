
import React, { useState, useEffect } from 'react';
import './App.css';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-mklsn",
  showAttribution: false
});

const ChartTabs = () => {
  const [tab, setTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setTab(tabNumber);
  };

  useEffect(() => {
    const embedChart = async () => {
      const chartContainer = document.getElementById("chart-data");

      if (tab === 1) {
          const summaryChart = sdk.createChart({
            chartId: "65bf0d9c-e856-4e10-89b9-ef4bf399f661" 
          });
          summaryChart.render(chartContainer);
	} else if (tab === 2) {
          const teamsChart = sdk.createChart({
            chartId: "a61c7008-41fe-4a2f-92ff-8de2400bcc98" 
          });
          teamsChart.render(chartContainer);
	} else if (tab === 3) {
          const cvxChart = sdk.createChart({
            chartId: "65bf379b-3931-43b1-85ce-2c8abea2974f" 
          });
          cvxChart.render(chartContainer);
      } else if (tab === 4) {
        const gsChart = sdk.createChart({
          chartId: "95b19997-4642-4b55-b8c2-c54f158c4d2f" 
        });
        gsChart.render(chartContainer);
    }
    };

    embedChart();
  }, [tab]);

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
        <div
          className={`tab ${tab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          Tab 4
        </div>
      </div>
      <div className="tab-content" id="chart-data">
      </div>
    </div>
  );
};

export default ChartTabs;
