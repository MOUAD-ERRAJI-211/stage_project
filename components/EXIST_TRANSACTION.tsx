import React from 'react';
import "./components.css";

const EXIST_TRANSACTION = () => {
  function handleDelete(id: React.Key | null | undefined): void {
    throw new Error('Function not implemented.');
  }

  const transactions = [
    // Sample transaction data
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    },
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    },
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    },
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    },
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    },
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    }
    ,
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    },
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    },
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    },
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    },
    {
      id: 1,
      product: 'Product A',
      supplier: 'Supplier X',
      site: 'AKNSOUS',
      quantity: 10,
      price: 9.99,
      date: '2023-05-01',
      type: 'Purchase'
    }
  ];

  return (
    <div className="transaction-container">
      <p className="transaction-title">View and Manage Transactions</p>
      <p className="transaction-label">Select a site:</p>
      <select className="transaction-select">
        <option value="AKNSOUS">AKNSOUS</option>
        <option value="MAZRAA">MAZRAA</option>
      </select>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Supplier</th>
            <th>Site</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.product}</td>
              <td>{transaction.supplier}</td>
              <td>{transaction.site}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.price}</td>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>
                <button className="button-29" onClick={() => handleDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EXIST_TRANSACTION;
