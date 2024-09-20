import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdClose } from 'react-icons/md';
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import FinanceChart from './FinanceChart'; 

Modal.setAppElement('#root');

const EmployeeList = ({ clients }) => {
  const [employees, setEmployees] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState({ id: null, name: '', valuePaid: 0, employeeSince: '' });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setCurrentEmployee({ id: null, name: '', valuePaid: 0, employeeSince: '' });
    setModalIsOpen(false);
  };

  const addOrUpdateEmployee = () => {
    const newValuePaid = Number(currentEmployee.valuePaid);
    if (currentEmployee.id) {
      setEmployees(prevEmployees => prevEmployees.map(employee => (employee.id === currentEmployee.id ? { ...currentEmployee, valuePaid: newValuePaid } : employee)));
    } else {
      const newEmployeeData = { id: Date.now(), ...currentEmployee, valuePaid: newValuePaid };
      setEmployees(prevEmployees => [...prevEmployees, newEmployeeData]);
    }
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const editEmployee = (employee) => {
    setCurrentEmployee(employee);
    openModal();
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id));
  };

  return (
    <div>
      <h2>Lista de Funcionários</h2>
      <button onClick={openModal}>Adicionar Funcionário</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>{currentEmployee.id ? 'Editar Funcionário' : 'Adicionar Funcionário'}</h2>
          <button onClick={closeModal} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <MdClose size={24} />
          </button>
        </div>
        <label>
          Nome:
          <input type="text" name="name" value={currentEmployee.name} onChange={handleChange} />
        </label>
        <label>
          Valor Pago:
          <input type="number" name="valuePaid" value={currentEmployee.valuePaid} onChange={handleChange} />
        </label>
        <label>
          Funcionário Desde:
          <input type="date" name="employeeSince" value={currentEmployee.employeeSince} onChange={handleChange} />
        </label>
        <button onClick={addOrUpdateEmployee}>{currentEmployee.id ? 'Atualizar' : 'Salvar'}</button>
      </Modal>
      <table>
        <thead>
          <tr>
            <th>Nome do Funcionário</th>
            <th>Valor Pago</th>
            <th>Funcionário Desde</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>R$ {employee.valuePaid.toFixed(2)}</td>
              <td>{employee.employeeSince}</td>
              <td>
                <button onClick={() => editEmployee(employee)} style={{ background: 'none', border: 'none' }}>
                  <AiOutlineEdit size={20} />
                </button>
                <button onClick={() => deleteEmployee(employee.id)} style={{ background: 'none', border: 'none' }}>
                  <AiFillDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <FinanceChart clients={clients} employees={employees} />
    </div>
  );
};

export default EmployeeList;