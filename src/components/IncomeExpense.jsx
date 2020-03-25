import React from 'react'

export default function IncomeExpense(props) {

  const transactions = props.transactions;

  const amounts = transactions.map( transaction => transaction.amount);
  const income = amounts
    .filter( item => item>0)
    .reduce ( (sum, item) => (sum += item),0);

  const expense = -1 * amounts
    .filter( item => item<0)
    .reduce ( (sum, item) => (sum += item),0);

  console.log(income+", "+expense);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">฿{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">฿{expense}</p>
      </div>
    </div>

    // <div className="inc-exp-container">
    //   <div>
    //     <h4>Income</h4>
    //     <p className="money plus">฿8000</p>
    //   </div>
    //   <div>
    //     <h4>Expense</h4>
    //     <p className="money minus">฿1450</p>
    //   </div>
    // </div>
  )
}
