import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {

    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);

        console.log(event.target.value);
    }
    return (
        <div className='w-100 alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget