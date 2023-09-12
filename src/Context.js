import React, { createContext, useState } from 'react';
const GlobalData = createContext({});
const GlobalDataProvider = ({ children }) => {
  const [value1, setValue] = useState(4);
  const updateMyId = (x) => {
    setValue(x);    
  };
  const message = 'hey israr i am fine';
  return (
    <div>
      <GlobalData.Provider value={{ message, myId: updateMyId }}>
        {children}
      </GlobalData.Provider>
    </div>
  );
};
export default GlobalDataProvider;
export { GlobalData };
