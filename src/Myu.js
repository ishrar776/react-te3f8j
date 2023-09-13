import React, { useState, useContext, useEffect } from 'react';
import { GlobalData } from './Context';
const Myu = () => {
  //const { message, myId, myId1 } = useContext(GlobalData);
  const { message, myId } = useContext(GlobalData);
  return (
    <div>
      I am Myu component
      <p>{message}</p>
      {myId}
    </div>
  );
};
export default Myu;
