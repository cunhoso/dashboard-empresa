import React, { useState, useEffect } from 'react';

const AddClient = ({ onAdd, clientToEdit }) => {
  const [name, setName] = useState('');
  const [amountReceived, setAmountReceived] = useState('');
  const [since, setSince] = useState('');

  useEffect(() => {
    if (clientToEdit) {
      setName(clientToEdit.name);
      setAmountReceived(clientToEdit.amountReceived);
      setSince(clientToEdit.since);
    } else {
      setName('');
      setAmountReceived('');
      setSince('');
    }
  }, [clientToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, amountReceived, since });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do Cliente"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Valor Recebido"
        value={amountReceived}
        onChange={(e) => setAmountReceived(e.target.value)}
        required
      />
      <input
        type="date"
        value={since}
        onChange={(e) => setSince(e.target.value)}
        required
      />
      <button type="submit">{clientToEdit ? 'Adicionar Cliente' : 'Adicionar Cliente'}</button>
    </form>
  );
};

export default AddClient;