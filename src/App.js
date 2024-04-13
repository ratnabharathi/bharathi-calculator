import "./styles.css";
import { useState } from "react";

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const clearInput = () => {
    setExpression('');
    setResult('');
  };

  const evaluateExpression = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleInput('7')}>7</button>
          <button onClick={() => handleInput('8')}>8</button>
          <button onClick={() => handleInput('9')}>9</button>
          <button onClick={() => handleInput('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('4')}>4</button>
          <button onClick={() => handleInput('5')}>5</button>
          <button onClick={() => handleInput('6')}>6</button>
          <button onClick={() => handleInput('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('1')}>1</button>
          <button onClick={() => handleInput('2')}>2</button>
          <button onClick={() => handleInput('3')}>3</button>
          <button onClick={() => handleInput('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput('0')}>0</button>
          <button onClick={() => handleInput('+')}>+</button>
          <button onClick={evaluateExpression}>=</button>
          <button onClick={clearInput}>C</button>
        </div>
      </div>
      
    </div>
  );
}