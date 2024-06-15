import ChartDataLabels from 'chartjs-plugin-datalabels';

export const getChocolateCookieData = () => ({
  labels: ['Sugar', 'Fat', 'Carbohydrates', 'Protein', 'Fiber'],
  datasets: [
    {
      label: 'Chocolate Cookie Nutrition',
      data: [12, 10, 18, 3, 2], // example values in grams
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

export const getWhiteChocolateCookieData = () => ({
  labels: ['Sugar', 'Fat', 'Carbohydrates', 'Protein', 'Fiber'],
  datasets: [
    {
      label: 'White Chocolate Cookie Nutrition',
      data: [14, 9, 17, 2, 1], // example values in grams
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

export const getChartOptions = (title) => ({
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: title,
    },
    datalabels: {
      color: '#000',
      anchor: 'end',
      align: 'start',
      formatter: (value) => `${value}g`,
      font: {
        weight: 'bold',
      },
    },
  },
});

export const getComparisonData = () => {
  const chocolateData = getChocolateCookieData().datasets[0].data;
  const whiteChocolateData = getWhiteChocolateCookieData().datasets[0].data;

  return {
    labels: ['Sugar', 'Fat', 'Carbohydrates', 'Protein', 'Fiber'],
    datasets: [
      {
        label: 'Chocolate Cookie',
        data: chocolateData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'White Chocolate Cookie',
        data: whiteChocolateData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };
};
