import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const[amount,setAmount]=useState(0);//1000
  const[year,setYear]=useState(0);//3
  const[rate,setRate]=useState(0);//5

  const[interest,setInterest]=useState(0);//Result Interest

  console.log(amount,year,rate);

  const calculate=(e)=>{
    const output=amount*year*rate/2;
    console.log(output);
    setInterest(output);
  }

  const rset=(e)=>{
    setAmount(0);
    setInterest(0);
    setYear(0);
    setRate(0);
  }

  return (
    <div className="App">
      <div className="container">

          <div className="header">
            <h1>Simple Interest Calculator</h1>
            <p>Calculate your simple interest with us !! </p>
          </div>

          <div className="total">
            <h1> &#x20B9; {interest}</h1>
            <p>Your Total Interest</p>
          </div>

          <div className="form">
            <form>
              <div className="input">
              <TextField id="outlined-basic" value={amount || ""} onChange={(e)=>setAmount(e.target.value)} label="Amount" variant="outlined" />
              <br />
              <TextField id="outlined-basic" value={year || ""} onChange={(e)=>setYear(e.target.value)} label="Year" variant="outlined" />
              <br />
              <TextField id="outlined-basic" value={rate || ""} onChange={(e)=>setRate(e.target.value)} label="Rate" variant="outlined" />
              </div>

              <div className="button">
              <Button variant="contained" style={{backgroundColor:'rgb(81, 41, 81)'}} onClick={e=>calculate(e)}>Calculate</Button>
              <Button variant="contained" style={{backgroundColor:' rgb(81, 41, 81)'}} onClick={e=>rset(e)}>Reset</Button>
              </div>

            </form>
          </div>
      </div>
    </div>
  );
}

export default App;
