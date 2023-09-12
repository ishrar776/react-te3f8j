import React, { useState, useContext, useEffect } from 'react';
import { GlobalData } from './Context';
const Myu = () => {
  const { message, myId } = useContext(GlobalData);
  return (
    <div>
      I am Myu component
      {myId.updateMyId}
    </div>
  );
};
export default Myu;
