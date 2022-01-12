import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { useStateContext } from '../../context/StateContextProvider';
import './Form.css';

const Form = () => {
  const { list, setList, closeModal } = useStateContext();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime().toString(),
      userName: name,
      userAge: age,
    };
    setList([...list, newItem]);
    setName('');
    setAge('');
    closeModal();
  };

  return (
    <Modal>
      <div className='container'>
        <form className='grocery-form' onSubmit={handleSubmit}>
          <h3>New User Information</h3>
          <div className='form-control'>
            <div>
              <input
                type='text'
                className='grocery'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type='number'
                className='grocery'
                placeholder='Your Age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button type='submit' className='submit-btn'>
              Add
            </button>
            <button type='submit' className='close-btn' onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Form;
