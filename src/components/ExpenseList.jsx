import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { AppContext } from '../context/AppContext'

const ExpenseList = () => {
  const { expenses }  = useContext(AppContext);
    
  return (
    <ul className='list-group'>
        {expenses.map((item) => (
            <ExpenseItem id={item.id} name={item.name} cost={item.cost}/>
        ))}
    </ul>
  )
}

export default ExpenseList