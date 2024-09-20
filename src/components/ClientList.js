import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import FinanceChart from './FinanceChart'; // Importando o gráfico

Modal.setAppElement('#root');

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState({ id: null, name: '', valueReceived: 0, clientSince: '' });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setCurrentClient({ id: null, name: '', valueReceived: 0, clientSince: '' });
    setModalIsOpen(false);
  };

  const addOrUpdateClient = () => {
    const newValueReceived = Number(currentClient.valueReceived);
    if (currentClient.id) {
      setClients(prevClients => prevClients.map(client => (client.id === currentClient.id ? { ...currentClient, valueReceived: newValueReceived } : client)));
    } else {
      const newClientData = { id: Date.now(), ...currentClient, valueReceived: newValueReceived };
      setClients(prevClients => [...prevClients, newClientData]);
    }
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentClient((prev) => ({ ...prev, [name]: value }));
  };

  const editClient = (client) => {
    setCurrentClient(client);
    openModal();
  };

  const deleteClient = (id) => {
    setClients(clients.filter(client => client.id !== id));
  };

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <button onClick={openModal}>Adicionar Cliente</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>{currentClient.id ? 'Editar Cliente' : 'Adicionar Cliente'}</h2>
          <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <MdClose size={24} />
          </button>
        </div>
        <label>
          Nome:
          <input type="text" name="name" value={currentClient.name} onChange={handleChange} />
        </label>
        <label>
          Valor Recebido:
          <input type="number" name="valueReceived" value={currentClient.valueReceived} onChange={handleChange} />
        </label>
        <label>
          Cliente Desde:
          <input type="date" name="clientSince" value={currentClient.clientSince} onChange={handleChange} />
        </label>
        <button onClick={addOrUpdateClient}>{currentClient.id ? 'Atualizar' : 'Salvar'}</button>
      </Modal>
      <table>
        <thead>
          <tr>
            <th>Nome do Cliente</th>
            <th>Valor Recebido</th>
            <th>Cliente Desde</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>R$ {client.valueReceived.toFixed(2)}</td>
              <td>{client.clientSince}</td>
              <td>
                <button onClick={() => editClient(client)} style={{ background: 'none', border: 'none' }}>
                  <AiOutlineEdit size={20} />
                </button>
                <button onClick={() => deleteClient(client.id)} style={{ background: 'none', border: 'none' }}>
                  <AiFillDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <FinanceChart clients={clients} employees={[]} /> 
    </div>
  );
};

export default ClientList;