import React, { useState, useEffect } from 'react';
import Algebra from 'algebra.js'
import './App.css';

function App() {
  const [firstStep, setFirstStep] = useState({ equation: 'w = pow(m, 1/d) - 1', result: '' });
  const [secondStep, setSecondStep] = useState({ equation: 'x = w/yr', result: '' });

  const [vars, setVars] = useState({
    d: 15,
    m: 2,
    y: 3,
    r: 0.8
  })

  const calculateFirstStep = () => {
    const result = Math.pow(vars.m, 1 / vars.d) - 1;

    setFirstStep({ ...firstStep, result: result });
  }

  const calculateSecondStep = () => {
    const result = firstStep.result/(vars.y * vars.r)

    setSecondStep({ ...secondStep, result: result });
  }

  return (
    <div className="container">
      <br />
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Variables</h5>
          <div className="entries-values">
            <label>D</label>
            <input
              type="text"
              className="form-control d"
              onChange={(event) => setVars({ ...vars, d: event.target.value })}
              value={vars.d}>
            </input>
            <label>M</label>
            <input
              type="text"
              className="form-control m"
              onChange={(event) => setVars({ ...vars, m: event.target.value })}
              value={vars.m}>
            </input>
            <label>Y</label>
            <input
              type="text"
              className="form-control y"
              onChange={(event) => setVars({ ...vars, y: event.target.value })}
              value={vars.y}>
            </input>
            <label>R</label>
            <input
              type="text"
              className="form-control r"
              onChange={(event) => setVars({ ...vars, r: event.target.value })}
              value={vars.r}>
            </input>
          </div>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Step 1</h5>
          <p className="card-text">Formula: {firstStep.equation}</p>
          <br />
          <p className="card-text">Result: {firstStep.result}</p>
          <br />
          <button className="btn btn-primary" onClick={() => calculateFirstStep()}>Calculate</button>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Step 2</h5>
          <p className="card-text">Formula: {secondStep.equation}</p>
          <br />
          <p className="card-text">Result: {secondStep.result}</p>
          <br />
          <button className="btn btn-primary" onClick={() => calculateSecondStep()}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
