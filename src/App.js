import React, { useState, useContext, useEffect } from 'react';
import './style.css';
import Child from './Child';
import Myu from './Myu';
import { GlobalData } from './Context';
import GlobalDataProvider from './Context';
//import { GlobalData } from './Context';
export default function App() {
  //const { message, myId } = useContext(GlobalData);
  return (
    <div>
      <h1>Hello</h1>
      <GlobalDataProvider>
        <p>
          <Child />
        </p>
        <p><Myu /></p>
      </GlobalDataProvider>
    </div>
  );
}
