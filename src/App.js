import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    let result = 0
    if (gender === "male") {
      result = gramsLeft/ (weight * 0.7);
    } else {
      result = gramsLeft/ (weight * 0.6);
    }
    setResult(result);
  }


  return (
    <>
    <h3>Alcometer</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight </label>
        <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>
        <label>bottles </label>
        <input name="bottle" type="number" value={bottles} onChange={e => setBottles(e.target.value)}></input>
      </div>
      <div>
        <label>Gender </label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      </div>
      <div>
        <label>Time </label>
        <input type="number" name="time" value={time} onChange={e => setTime(e.target.value)}></input>
    
        <div><output>{result.toFixed(2)}</output></div>
      </div>
      <button>Calculate </button>
    </form>
    </>
   
  );
  };
  
   

export default App;
