import React from 'react';
import { Bar } from 'react-chartjs-2';
import '../css/FinanceChart.css';

const FinanceChart = ({ clients }) => {
  const labels = clients.map(client => client.name); 
  const dataValues = clients.map(client => client.valueReceived);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Valores Recebidos',
        data: dataValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default FinanceChart;