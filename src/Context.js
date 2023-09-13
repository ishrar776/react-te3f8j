import React, { createContext, useState } from 'react';
const GlobalData = createContext({});
const GlobalDataProvider = ({ children }) => {
  const [myId, setValue] = useState(4);
  const updateMyId = (x) => {
    setValue(x);
  };
  //const myId = {};
  const message = 'hey israr i am fine11';
  console.log('shared variable' + myId.updateMyId2);
  return (
    <GlobalData.Provider value={{ message, myId:updateMyId }}>
      {children}
    </GlobalData.Provider>
  );
};
export default GlobalDataProvider;
export { GlobalData };
