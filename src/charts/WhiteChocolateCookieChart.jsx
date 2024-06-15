import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getWhiteChocolateCookieData, getChartOptions } from '../data/chartData';

const WhiteChocolateCookieChart = () => {
  const data = getWhiteChocolateCookieData();
  const options = getChartOptions('Nutritional Breakdown of a White Chocolate Cookie');

  return (
    <div className="chart-container">
      <h2>White Chocolate Cookie Nutrition Facts</h2>
      <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default WhiteChocolateCookieChart;
