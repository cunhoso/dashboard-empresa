import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Income = () => {
  useEffect(() => {
    const chartInstance = Chart.getChart('incomeChart');
    if (chartInstance) {
      chartInstance.destroy();
    }
  }, []);

  const data = {
    labels: ['Cliente A', 'Cliente B', 'Cliente C'],
    datasets: [
      {
        label: 'Ganhos',
        data: [100, 200, 150],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Gastos',
        data: [80, 120, 90],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Renda</h2>
      <Bar id="incomeChart" data={data} options={options} />
    </div>
  );
};

export default Income;