import React from 'react'

import Transaction from './Transaction';

export default function TransactionTable(props) {

  const transactions = props.transactions;

  return (
    <div>
      <div><h3>Transaction History</h3></div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="transaction-list">
        {
          transactions.map ( transaction => (
            <Transaction  key={transaction.id} 
                          transaction={transaction} />
          ))
        }
        </tbody>
      </table>
      <button 
        id="clear-history" 
        className="btn btn-danger btn-block"
        onClick={props.clearTransactions}>Clear History</button>
    </div>
  )
}
