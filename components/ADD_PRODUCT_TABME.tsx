'use client';

import React, { useState, useEffect } from 'react';
import "./components.css";

const ADD_PRODUCT_TABME = () => {
  const [fullName, setFullName] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddProduct(fullName, code, category);
  };

  async function handleAddProduct(name: string, code: string, category: string) {
    try {
      const response = await fetch('http://localhost:3001/add-product', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, code, category }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Error: ' + (error as Error).message);
    }
  }

  return (
    <div className="add-product-container">
      <h1 id="add-product-title">Add Product</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="add-product-form__group">
          <input
            type="text"
            id="fullName"
            className="add-product-form__field"
            placeholder="Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label htmlFor="fullName" className="add-product-form__label">Name</label>
        </div>
        <div className="add-product-form__group">
          <input
            type="text"
            id="code"
            className="add-product-form__field"
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <label htmlFor="code" className="add-product-form__label">Code</label>
        </div>
        <div className="add-product-form__group">
          <input
            type="text"
            id="category"
            className="add-product-form__field"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="category" className="add-product-form__label">Category</label>
        </div>
        <button type="submit" className="button-29" id='submit_ADD_PRODUCT'>Submit</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default ADD_PRODUCT_TABME;
