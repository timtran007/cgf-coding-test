import React, { useState } from 'react'
import './App.css';



function Form({checkEligibility}) {

    const [stateData, setStateData] = useState('Alabama')
    const [income, setIncome] = useState(0)
    const [householdSize, setHouseholdSize] = useState('1')

    const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    
    const householdSizes = [1,2,3,4,5,6,7,8]

    function handleStateChange(e) {
        setStateData(e.target.value)
    }

    function handleIncomeChange(e) {
        setIncome(e.target.value)
    }

    function handleHouseholdSizeChange(e) {
        setHouseholdSize(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        checkEligibility(stateData, householdSize, income)
    }
  return (
    <form
        onSubmit={handleSubmit}
    >
        <div className='spacing'>
            <label htmlFor='state'>Select Your State</label>
            <select
                onChange={handleStateChange}
                className='field'
                name='state'
                id='state'
                value={stateData}
            >
                {states.map(state => {
                    return(
                        <option 
                            id='state' 
                            key={state} 
                            value={state}
                        >
                            {state}
                        </option>
                    )
                })}
            </select>
        </div>
        <div className='spacing'>
            <label htmlFor='income'>Enter Your Income</label>
            <input
                onChange={handleIncomeChange}
                className='field'
                name='income'
                id='income'
                value={income}
            />
        </div>
        <div className='spacing'>
            <label htmlFor='householdSize'>Select Your House Hold Size</label>
            <select
                onChange={handleHouseholdSizeChange}
                name='householdSize'
                id='householdSize'
                className='field'
                value={householdSize}
            >
                {householdSizes.map(size => {
                    return(
                        <option 
                            id='householdSize' 
                            key={size} 
                            value={size}
                        >
                            {size}
                        </option>
                    )
                })}
            </select>
        </div>
        <div className='spacing'>
        <input
            type='submit'
            value='check my eligibility'
            className='button'
        />
        </div>
    </form>
  )}
export default Form

