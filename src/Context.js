import React, { createContext, useState } from 'react';
const GlobalData = createContext({});
const GlobalDataProvider = ({ children }) => {
  const [myId, setValue] = useState(0);
  const myId1 = (x) => {
    setValue(x);
  };
  const message = 'hey israr i am fine11';
  return (
    <GlobalData.Provider value={{ message, myId, myId1 }}>
      {children}
    </GlobalData.Provider>
  );
};
export default GlobalDataProvider;
export { GlobalData };
