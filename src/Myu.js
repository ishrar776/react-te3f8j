import React, { useState, useContext, useEffect } from 'react';
import { GlobalData } from './Context';
const Myu = () => {
  const { message, myId } = useContext(GlobalData);
  return (
    <div>
      hey I am here {message}
      {myId.updateMyId}
    </div>
  );
};
export default Myu;
