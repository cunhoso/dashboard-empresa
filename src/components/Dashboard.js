import React from 'react';
import '../css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Bem-vindo ao Funcionário!</h1>
      <div className="info">
        <h2>Horários e Dias de Funcionamento do RH</h2>
        <p>Segunda a Sexta: 9h às 17h</p>
        <p>Contato: <a href="mailto:rh@CEBPconsultoria.com.br">rh@CEBPconsultoria.com.br</a></p>
      </div>
    </div>
  );
};

export default Dashboard;