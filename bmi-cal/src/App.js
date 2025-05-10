import './App.css';
import { useState } from 'react';
//{useState} from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic 
  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid Weight and Height')
    }
    else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(2))

      if (bmi < 18.5) {
        setMessage('You are under weight')
      }
      else if (bmi < 24.9) {
        setMessage('Normal Weight')
      }
      else if ((bmi < 29.9)) {
        setMessage('You are over Weight')
      }
      else {
        setMessage('Obese')
      }
    }
  }

  let reload = () => {
    window.location.reload()
  }


  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>
              Weight (Kg)
            </label>
            <input type='text' placeholder='Enter Weight Value' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>
              Height (Cm)
            </label>
            <input type='text' placeholder='Enter Height Value' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;


