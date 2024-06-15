import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getChocolateCookieData, getChartOptions } from '../data/chartData';

const ChocolateCookieChart = () => {
  const data = getChocolateCookieData();
  const options = getChartOptions('Nutritional Breakdown of a Chocolate Cookie');

  return (
    <div className="chart-container">
      <h2>Chocolate Cookie Nutrition Facts</h2>
      <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default ChocolateCookieChart;
