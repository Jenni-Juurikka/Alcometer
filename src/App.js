import './App.css';
import React, {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState("male");
  const [alcohol, setAlcohol] = useState(0);

  function alcoholLevel(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning - hours);

    let result = 0;
    if (gender === "male") {
      result = gramsLeft / (weight * 0.7);
    } else {
      result = gramsLeft / (weight * 0.6);
    }
    setAlcohol(result);
  }

  return (
    <div className="container">
      <h2 className="col-12 bg bg-info">Calculating alcohol blood level</h2>
      <form className="col-12 col-md-3" onSubmit={alcoholLevel}>
        <div>
          <label className="form-label mt-3">Weight (kg): </label>
          <input className="form-control" type="number" value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label className="form-label mt-3">Bottles: </label>
          <input className="form-control" type="number" value={bottles} onChange={e => setBottles(e.target.value)}/>
        </div>
        <div>
          <label className="form-label mt-3">Time (h): </label>
          <input className="form-control" type="number" value={hours} onChange={e => setHours(e.target.value)}/>
        </div>
        <div className="mt-3 mb-2">
          <label className="space">Gender:</label>
          <input className="form-check-input" type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/>
            <label className="form-check-label space">Male</label>
          <input className="form-check-input" type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/>
            <label className="form-check-label">Female</label>
        </div>
        <div className="mt-5">
          <output>{alcohol.toFixed(1)}</output>
        </div>
        <button className="btn btn-primary mt-3">Calculate</button>
      </form>
    </div>
  );
}

export default App;
