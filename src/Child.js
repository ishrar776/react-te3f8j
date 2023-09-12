import React, { useState, useContext } from 'react';
import { GlobalData } from './Context';
const Child = () => {
  const { message, myId } = useContext(GlobalData);
  const [value, setValue] = useState('');
  const [valueA, setValueA] = useState('');
  const [addData, setData] = useState([]);
  let [myCart, SetmyCart] = useState(1);
  const dataAdd = (e) => {
    e.preventDefault();
    setData;
    const id = addData.length + 1;
    setData((prev) => [
      ...prev,
      {
        id: id,
        name: value,
        age: valueA,
      },
    ]);
    console.log(addData);
    console.log(id);
  };
  const addToCart = (e) => {
    SetmyCart(myCart + 1);
    //props.name(myCart);
    myId.updateMyId = myCart;
    console.log('my global message is ' + message);
    console.log('my global number is ' + myId.updateMyId);
  };
  return (
    <div>
      <p>
        <input
          type="text"
          name="txtName"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </p>
      <p>
        <input
          type="text"
          name="txtAge"
          onChange={(e) => setValueA(e.target.value)}
          value={valueA}
        />
      </p>
      <p>
        <input type="submit" onClick={dataAdd} />
      </p>
      <p>
        <input type="submit" onClick={addToCart} />
      </p>
      <p>
        <ul>
          {addData.map((item) => (
            <li id={item.id}>
              {item.name} and {item.age}
            </li>
          ))}
        </ul>
      </p>
      <p>{myCart}</p>
    </div>
  );
};
export default Child;
