import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import ClientList from '../components/ClientList';
import EmployeeList from '../components/EmployeeList';
import Income from '../components/Income';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<ClientList />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/income" element={<Income />} />
    </Routes>
  );
};

export default AppRoutes;