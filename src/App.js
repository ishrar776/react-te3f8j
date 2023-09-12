import React, { useState } from 'react';
import './style.css';
import Child from './Child';

export default function App() {
  const [value, setValue] = useState('');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>I am parent {value}</p>
      <p>
        <Child name={setValue} />
      </p>
    </div>
  );
}
