import React, { useState, useEffect } from 'react';

const AddEmployee = ({ onAdd, employeeToEdit }) => {
  const [name, setName] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [since, setSince] = useState('');

  useEffect(() => {
    if (employeeToEdit) {
      setName(employeeToEdit.name);
      setAmountPaid(employeeToEdit.amountPaid);
      setSince(employeeToEdit.since);
    } else {
      setName('');
      setAmountPaid('');
      setSince('');
    }
  }, [employeeToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, amountPaid, since });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Funcionário"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Valor Pago"
        value={amountPaid}
        onChange={(e) => setAmountPaid(e.target.value)}
        required
      />
      <input
        type="date"
        value={since}
        onChange={(e) => setSince(e.target.value)}
        required
      />
      <button type="submit">{employeeToEdit ? 'Adicionar Funcionário' : 'Adicionar Funcionário'}</button>
    </form>
  );
};

export default AddEmployee;