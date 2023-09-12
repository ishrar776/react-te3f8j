import React from 'react';
import './style.css';
import Child from './Child';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>
        <Child />
      </p>
    </div>
  );
}
