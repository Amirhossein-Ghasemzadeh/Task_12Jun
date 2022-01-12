import React, { useState, useContext, createContext, useEffect } from 'react';

const StateContext = createContext();

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

export const StateContextProvider = ({ children }) => {
  const [list, setList] = useState(getLocalStorage());
  const [modalShown, setModalShown] = useState(false);

  const openModal = () => {
    setModalShown(true);
  };

  const closeModal = () => {
    setModalShown(false);
  };

  const clearList = () => {
    setList([]);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <StateContext.Provider
      value={{
        list,
        setList,
        modalShown,
        openModal,
        closeModal,
        clearList,
        removeItem,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
