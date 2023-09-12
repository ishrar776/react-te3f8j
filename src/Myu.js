import React, { useState, useContext, useEffect } from 'react';
import { GlobalData } from './Context';
const Myu = () => {
  const { message, myId } = useContext(GlobalData);
  const [display, setDisplay] = useState(myId.updateMyId);
  useEffect(() => {
    //setDisplay(myId.updateMyId);
  }, []);
  return (
    <div>
      <p>{message}</p>I am Myu component
      {display}
    </div>
  );
};
export default Myu;
