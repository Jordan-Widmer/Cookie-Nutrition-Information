import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { getComparisonData, getChartOptions } from '../data/chartData';

const ComparisonChart = () => {
  const data = getComparisonData();
  const options = getChartOptions('Nutritional Comparison of Chocolate vs White Chocolate Cookies');

  return (
    <div className="chart-container">
      <h2>Nutrition Comparison</h2>
      <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
      <div className="chart-legend">
        <p><strong>Chocolate Cookie:</strong> Higher in protein and fiber.</p>
        <p><strong>White Chocolate Cookie:</strong> Higher in sugar.</p>
      </div>
    </div>
  );
};

export default ComparisonChart;
