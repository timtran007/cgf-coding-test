import React, {useState} from 'react';
import Form from './Form';
import './App.css';


function App() {
  const [eligibility, setEligibility] = useState('')
  function checkEligibility(state, householdSize, income){
    const amiByState = {
      "Texas": {
        1: 59710,
        2: 68240,
        3: 76770,
        4: 85300,
        5: 92124,
        6: 98948,
        7: 105772,
        8: 112596,
      },
      "Rhode Island": {
        1: 69510,
        2: 79440,
        3: 89370,
        4: 99300,
        5: 107244,
        6: 115188,
        7: 123132,
        8: 131076,
      },
      "Massachusetts": {
        1: 84280,
        2: 96320,
        3: 108360,
        4: 120400,
        5: 130032,
        6: 139664,
        7: 149296,
        8: 153928,
      }
      //add new states AMI by household size here
    }
    if(state in amiByState){
      const ami = amiByState[state][householdSize]
      if(parseInt(income) <= ami){
        setEligibility("You're eligible")
      } else{
        setEligibility("You are ineligible")
      }
    } else{
      setEligibility("You are ineligible")
    }
  }

  function handleClear(){
    setEligibility('')
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2>Solar Loan Eligibility</h2>
        <Form checkEligibility={checkEligibility}/>
        <div className='spacing'>
        {eligibility}
        </div>
        <button
          className='clear-button'
          onClick={handleClear}
        > clear </button>
      </header>
    </div>
  );
}

export default App;
