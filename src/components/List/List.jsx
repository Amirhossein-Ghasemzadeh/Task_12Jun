import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useStateContext } from '../../context/StateContextProvider';
import './List.css';

const List = () => {
  const { list, removeItem } = useStateContext();
  return (
    <div className='grocery-list'>
      {list.map((item) => {
        const { id, userName, userAge } = item;
        return (
          <article className='grocery-item' key={id}>
            <p className='grocery-item'>
              {userName}__{userAge}(years old)
            </p>
            <div className='btn-container'>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
