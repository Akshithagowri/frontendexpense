import React from 'react';
import ExpenseItem from './ExpenseItem';

const History = (props) => {
  return (
    <div className='history'>
      {props.expense.map((expense) => (
        <ExpenseItem 
          key={expense._id}
          expense={expense} deleteExpense={props.deleteExpense}
        />
      ))}
    </div>
  );
};

export default History;
