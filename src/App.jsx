import { useState } from "react";
import data from "./utils/data.json";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [element, setElement] = useState(null);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    setElement(e.target.title);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setElement(null);
  };

  const maxAmountItem = data.reduce((maxItem, currentItem) => {
    return currentItem.amount > maxItem.amount ? currentItem : maxItem;
  });

  return (
    <main>
      <section className="container">
        <header className="head-container">
          <div className="balance">
            <span className="_1">My balance</span>
            <span className="_2">$921.48</span>
          </div>
          <img className="logo" src="/logo.svg" alt="logo" />
        </header>
        <div className="spend-container">
          <h1 className="title">Spending - Last 7 days</h1>
          <div className="charts-container">
            {data.map((item, i) => (
              <div key={i} className="chart-content">
                {isHovered && element === `$${item.amount}` && (
                  <div className="amount-card">
                    {element}
                  </div>
                )}
                <div
                  title={`$${item.amount}`}
                  className={`chart ${
                    maxAmountItem.amount === item.amount ? "max-chart" : ""
                  }`}
                  style={{ height: `${item.amount + 10}%` }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                ></div>
                <p className="day">{item.day}</p>
              </div>
            ))}
          </div>
          <div className="separator" />
          <div className="total-bill">
            <div className="total-bill_1">
              <span className="_1">Total this month</span>
              <span className="_2">$478.33</span>
            </div>
            <div className="total-bill_2">
              <span className="_1">+2.4%</span>
              <span className="_2">from last month</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/NVergil" target="_blank" rel="noreferrer">
          VerDanT
        </a>
        .
      </footer>
    </main>
  );
};

export default App;
