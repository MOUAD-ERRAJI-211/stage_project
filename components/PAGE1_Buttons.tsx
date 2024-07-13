import React from "react";
import Link from 'next/link';
import "./components.css";

function PAGE1_Buttons() {
  return (
    <div className="page1_buttons-container">
      <div className="page1_buttons-card">
        <h2 className="page1_buttons-card-title">Sales Monitoring</h2>
        <p className="page1_buttons-card-description">
          Monitor your sales performance and track key metrics.
        </p>
        <Link href="/sales">
          <button className="button-29">
            Get Started
          </button>
        </Link>
      </div>
      <div className="page1_buttons-card">
        <h2 className="page1_buttons-card-title">Bot Telegram</h2>
        <p className="page1_buttons-card-description">
          Integrate with Telegram for automated messaging and notifications.
        </p>
        <a
          href="https://web.telegram.org/k/#@gestion_int_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button-29">
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
}

export default PAGE1_Buttons;
