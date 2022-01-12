import React from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import { useStateContext } from '../../context/StateContextProvider';

const Container = () => {
  const { list, openModal, clearList, modalShown } = useStateContext();

  return (
    <section className='section-center'>
      <div className='submit-btn' onClick={openModal}>
        Add new user
      </div>
      {modalShown && <Form />}
      {list.length > 0 && (
        <div className='grocery-container'>
          <List />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default Container;
