'use client'
import React, { useState } from 'react';
import "./components.css";

interface Product {
  id: number;
  name: string;
}

interface Site {
  id: number;
  name: string;
}

const generateDummyTransactions = () => {
  const dummyTransactions = [];
  const transactionTypes = ['consumption', 'buy', 'return', 'detect', 'transfer'];
  const productNames = ['Product 1', 'Product 2', 'Product 3'];
  const siteNames = ['AKNSOUS', 'MAZRAA'];

  for (let i = 0; i < 10; i++) {
    const randomTransactionType = transactionTypes[Math.floor(Math.random() * transactionTypes.length)];
    const randomProductName = productNames[Math.floor(Math.random() * productNames.length)];
    const randomSiteName = siteNames[Math.floor(Math.random() * siteNames.length)];
    const randomQuantity = Math.floor(Math.random() * 100) + 1;
    const randomDate = new Date(Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];

    dummyTransactions.push({
      type: randomTransactionType,
      product: randomProductName,
      date: randomDate,
      site: randomSiteName,
      quantity: randomQuantity,
    });
  }

  return dummyTransactions;
};

const ADD_TRANSACTION: React.FC = () => {
  const [transactionType, setTransactionType] = useState<'consumption' | 'buy' | 'return' | 'detect' | 'transfer'>('consumption');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [date, setDate] = useState('');
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);
  const [quantity, setQuantity] = useState(0);
  const [transactions, setTransactions] = useState<{ type: string; product: string; date: string; site: string; quantity: number }[]>(generateDummyTransactions());

  const products: Product[] = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  const sites: Site[] = [
    { id: 1, name: 'AKNSOUS' },
    { id: 2, name: 'MAZRAA' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedProduct && selectedSite) {
      const newTransaction = {
        type: transactionType,
        product: selectedProduct.name,
        date,
        site: selectedSite.name,
        quantity,
      };
      setTransactions([...transactions, newTransaction]);
      setTransactionType('consumption');
      setSelectedProduct(null);
      setDate('');
      setSelectedSite(null);
      setQuantity(0);
    }
  };

  return (
    <div>
    <div className="add-product-container_tr">
      <form onSubmit={handleSubmit} className="add-product-form_tr">
      <h2 className="ADD_transaction-title_tr">Add Transaction</h2>
        <div className="add-product-form__group_tr">
          
          <select
          className='add-product-form__field_tr'
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value as 'consumption' | 'buy' | 'return' | 'detect' | 'transfer')}
          >
            <option value="consumption">Consumption</option>
            <option value="buy">Buy</option>
            <option value="return">Return</option>
            <option value="detect">Detect</option>
            <option value="transfer">Transfer</option>
          </select>
          <label htmlFor="transactionType" className='add-product-form__label_tr'>Transaction Type:</label>
        </div>
        <div className="add-product-form__group_tr">
          <select
          className='add-product-form__field_tr'
            value={selectedProduct?.id || ''}
            onChange={(e) => setSelectedProduct(products.find((p) => p.id === parseInt(e.target.value, 10)) || null)}
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
          <label htmlFor="product" className='add-product-form__label_tr'>Product:</label>
        </div>
        <div className="add-product-form__group_tr">
          <input
            type="date"
            value={date}
            className='add-product-form__field_tr'
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="date" className='add-product-form__label_tr'>Date:</label>
          </div>
        <div className="add-product-form__group_tr">
          <select
          className='add-product-form__field_tr'
            id="site"
            value={selectedSite?.id || ''}
            onChange={(e) => setSelectedSite(sites.find((s) => s.id === parseInt(e.target.value, 10)) || null)}
          >
            <option value="">Select a site</option>
            {sites.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </select>
          <label htmlFor="site" className='add-product-form__label_tr'>Site:</label>
        </div>
        <div className="add-product-form__group_tr">
          <input
            type="number"
            className='add-product-form__field_tr'
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <label htmlFor="quantity" className='add-product-form__label_tr'>Quantity:</label>
          </div>
        <button type="submit" className="button-29">Add Transaction</button>
      </form>
      </div>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Product</th>
            <th>Date</th>
            <th>Site</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.type}</td>
              <td>{transaction.product}</td>
              <td>{transaction.date}</td>
              <td>{transaction.site}</td>
              <td>{transaction.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ADD_TRANSACTION;
