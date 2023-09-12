import React, { useState } from 'react';
const Child = () => {
  const [value, setValue] = useState('');
  const [valueA, setValueA] = useState('');
  const [addData, setData] = useState([]);
  let [myCart, SetmyCart] = useState(0);
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
    //e.preventDefault();
    //let id = id + 1;
    SetmyCart(myCart + 1);
    console.log('my cart number is ' + myCart);
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
