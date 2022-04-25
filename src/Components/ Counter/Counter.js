import React, {useState} from 'react';
import Button from "../Button";

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const Increase = () => setCounter(counter + 1)
  const Decrease = () => setCounter(counter - 1)

  return (
    <div>
      <div>{counter}</div>
      <Button titile="Dec" type="danger" onClick={Decrease}/>
      <Button titile="Inc" type="success" onClick={Increase}/>
    </div>
  );
};

export default Counter;