import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-project-0-mklsn",
    showAttribution: false
  });
  const summaryChart = sdk.createChart({
    chartId: "65bf0d9c-e856-4e10-89b9-ef4bf399f661"
  });

function Chart() {
  useEffect(() => {
    summaryChart.render(document.getElementById("chart-data"));
    // .catch(() => window.alert("Chart failed to initialise"));
  }, []);

  return (
    <div id="stock">
        <h4> Stocks </h4>
        <div id="chart-data"></div>
      </div>
  );

};

export default Chart;