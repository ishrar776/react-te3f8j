import React, { useState, useContext } from 'react';
import './style.css';
import Child from './Child';
import { GlobalData } from './Context';
export default function App() {
  const { message, myId } = useContext(GlobalData);
  const itemcart = myId.updateMyId;
  //const [value, setValue] = useState('');
  //const itemcart = JSON.stringify(myId.updateMyId);
  //var stringify = JSON.parse(itemcart);
  return (
    <div>
      <h1>
        Hello {message} {myId}
      </h1>
      <p>I am parent {itemcart}</p>
      <p>
        <Child />
      </p>
    </div>
  );
}
