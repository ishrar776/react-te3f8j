import React, { useState, useContext, useEffect } from 'react';
import { GlobalData } from './Context';
const Myu = () => {
  const { message, myId } = useContext(GlobalData);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(myId.updateMyId);
    }, 300);
    //setDisplay(myId.updateMyId);
  }, [myId.updateMyId]);
  return (
    <div>
      I am Myu component
      <p>{message}</p>
      {display}
    </div>
  );
};
export default Myu;
