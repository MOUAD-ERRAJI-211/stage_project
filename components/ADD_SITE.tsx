'use client';

import React, { useState, useEffect } from 'react';
import './components.css';

interface Site {
  name: string;
  address: string;
  phoneNumber: string;
  type: 'internal' | 'external';
}

const ADD_SITE: React.FC = () => {
  const [siteName, setSiteName] = useState('');
  const [siteAddress, setSiteAddress] = useState('');
  const [sitePhoneNumber, setSitePhoneNumber] = useState('');
  const [siteType, setSiteType] = useState<'internal' | 'external'>('internal');
  const [sites, setSites] = useState<Site[]>(() => {
    const storedSites = localStorage.getItem('sites');
    return storedSites ? JSON.parse(storedSites) : [];
  });
  const [backgroundColor, setBackgroundColor] = useState('white');

  useEffect(() => {
    const storedSites = JSON.stringify(sites);
    localStorage.setItem('sites', storedSites);

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight) {
        setBackgroundColor('lightgray');
      } else {
        setBackgroundColor('white');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sites]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSite = {
        name: siteName,
        address: siteAddress,
        phoneNumber: sitePhoneNumber,
        type: siteType,
    };

    try {
        const response = await fetch('/api/sites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newSite),
        });
        if (!response.ok) {
            throw new Error('Failed to add site');
        }
        const addedSite = await response.json();
        setSites([...sites, addedSite]);
        setSiteName('');
        setSiteAddress('');
        setSitePhoneNumber('');
        setSiteType('internal');
    } catch (error) {
        console.error('Failed to add site:', error);
    }
  };

  return (
  <div>
    <div className="ADD_SITE-site-container" style={{ backgroundColor }}>
      <div className="ADD_SITE-form-container">
        <h2 className="ADD_SITE-title">Add Site</h2>
        <form onSubmit={handleSubmit} className="ADD_SITE-site-form">
          <div className="ADD_SITE-form__group1">
            <input
              type="text"
              id="siteName"
              className="ADD_SITE-form__field"
              placeholder="Site Name"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              required
            />
            <label htmlFor="siteName" className="ADD_SITE-form__label">Site Name</label>
          </div>
          <div className="ADD_SITE-form__group1">
            <input
              type="text"
              id="siteAddress"
              className="ADD_SITE-form__field"
              placeholder="Site Address"
              value={siteAddress}
              onChange={(e) => setSiteAddress(e.target.value)}
              required
            />
            <label htmlFor="siteAddress" className="ADD_SITE-form__label">Site Address</label>
          </div>
          <div className="ADD_SITE-form__group1">
            <input
              type="tel"
              id="sitePhoneNumber"
              className="ADD_SITE-form__field"
              placeholder="Phone Number"
              value={sitePhoneNumber}
              onChange={(e) => setSitePhoneNumber(e.target.value)}
              required
            />
            <label htmlFor="sitePhoneNumber" className="ADD_SITE-form__label">Phone Number</label>
          </div>
          <div className="ADD_SITE-form__group1">
            <select
              id="siteType"
              className="ADD_SITE-form__field"
              value={siteType}
              onChange={(e) => setSiteType(e.target.value as 'internal' | 'external')}
            >
              <option value="internal">Internal</option>
              <option value="external">External</option>
            </select>
            <label htmlFor="siteType" className="ADD_SITE-form__label">Type</label>
          </div>
          <button type="submit" className="button-29" id='submit_ADD_SITE'>Add Site</button>
        </form>
      </div>
      </div>
      <div className="ADD_SITE-table-container">
        <h2 id="SITES-title" className="button-29">Sites</h2>
        <table className="ADD_SITE-site-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {sites.map((site, index) => (
              <tr key={index}>
                <td>{site.name}</td>
                <td>{site.address}</td>
                <td>{site.phoneNumber}</td>
                <td>{site.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ADD_SITE;
