import { useState } from "react";
import "./App.css";

function App() {
  const [cost, setCost] = useState(0);
  const [intrest, setIntrest] = useState(0);
  const [fee, setFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const updateEmi = () => {};
  const calculateEmi = () => {};
  return (
    <div className="App">
      <h1>EMI CALCULATOR</h1>
      <span className="title">Total Cost of assest</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <span className="title">Intrest Rate</span>
      <input
        type="number"
        value={intrest}
        onChange={(e) => setIntrest(e.target.value)}
      />
      <span className="title">Processing Fee</span>
      <input
        type="number"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />
      <span className="title">Down Payment</span>
      <input
        type="range"
        min={0}
        max={cost}
        className="slider"
        value={downPayment}
        onChange={updateEmi}
      />
      <span className="title">Loan Per Month</span>
      <input
        type="range"
        min={calculateEmi(cost)}
        max={calculateEmi(0)}
        className="slider"
        value={downPayment}
        onChange={updateEmi}
      />
      <span className="title">Tenure</span>
      <input
        type="range"
        min={0}
        max={cost}
        className="slider"
        value={downPayment}
        onChange={updateEmi}
      />
    </div>
  );
}

export default App;
