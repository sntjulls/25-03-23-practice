import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, subCount } from './store/countSlice';

const App = () => {
  const [step, setStep] = useState(1);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(addCount(45));
  const handleSub = () => dispatch(subCount(45));
  const handleStep = ({ target: { value } }) => {
    setStep(Number(value));
  };
  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <input type="number" value={step} onChange={handleStep} />
    </>
  );
};

export default App;
