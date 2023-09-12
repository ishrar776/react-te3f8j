import React, { useState, useContext } from 'react';
import './style.css';
import Child from './Child';
import { GlobalData } from './Context';
export default function App() {
  const { message ,myId} = useContext(GlobalData);
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>Hello {message}</h1>
      <p>I am parent {myId.updateMyId}</p>
      <p>
        <Child />
      </p>
    </div>
  );
}
