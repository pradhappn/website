import React from "react";
import "../styles/tradeHistory.css";

// Component to display trade history cards
const TradeHistory = () => {
  return (
    <div className="trade-box">

      {[10, 15, 22.5, 10, 15].map((val, i) => (
        <div className="trade-card" key={i}>
          <h4>TRADE HISTORY {val}$</h4>

          <div className="trade-content">
            <div>
              <strong>HOLDING</strong><br />
              01 RAM<br />
              009 SHIVA<br />
              029 VEL
            </div>

            <div>
              <strong>OPEN</strong><br />
              009 SHIVA<br />
              029 VEL<br />
              009 SHIVA
            </div>

            <div>
              <strong>COMPLET</strong><br />
              009 SHIVA<br />
              01 RAM
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default TradeHistory;
