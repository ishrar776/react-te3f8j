import React, { createContext, useState } from 'react';
const GlobalData = createContext({});
const GlobalDataProvider = ({ children }) => {
  const [value1, setValue] = useState({});
  const updateMyId = (item) => {
    setValue(item);
  };
  console.log("values from global object is" + value1);
  const message = 'hey israr i am fine';
  return (
    <div>
      <GlobalData.Provider
        value={{
          message,
          myId: updateMyId,
        }}
      >
        {children}
      </GlobalData.Provider>
    </div>
  );
};
export default GlobalDataProvider;
export { GlobalData };
