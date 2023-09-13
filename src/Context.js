import React, { createContext, useState } from 'react';
const GlobalData = createContext({});
const GlobalDataProvider = ({ children }) => {
  const [myId, setValue] = useState(0);
  const myId1 = (x) => {
    setValue(x);
  };
  //const myId = {};
  const message = 'hey israr i am fine11';
  //console.log('shared variable' + myId.updateMyId2);
  return (
    <GlobalData.Provider value={{ message, myId, myId1 }}>
      {children}
    </GlobalData.Provider>
  );
};
export default GlobalDataProvider;
export { GlobalData };
