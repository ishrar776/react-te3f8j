import React, { useState, useContext, useEffect } from 'react';
import { GlobalData } from './Context';
const Myu = () => {
  const { message, myId } = useContext(GlobalData);
  const displayMsg = myId.updateMyId;
  return (
    <div>
      I am Myu component
      {displayMsg}
    </div>
  );
};
export default Myu;
