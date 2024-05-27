
import React, { useState } from 'react';

const SubscriptionCalculator = ({ basePrice, pricePerCreditLine, pricePerCreditScorePoint }) => {
  const [creditScore, setCreditScore] = useState(0);
  const [creditLines, setCreditLines] = useState(0);
  const [subscriptionPrice, setSubscriptionPrice] = useState(0);

  const calculateSubscriptionPrice = () => {
    const price = basePrice + (pricePerCreditLine * creditLines) + (pricePerCreditScorePoint * creditScore);
    setSubscriptionPrice(price);
  };

  return (
    <div>
      <input type="number" value={creditScore} onChange={e => setCreditScore(e.target.value)} placeholder="Credit Score" />
      <input type="number" value={creditLines} onChange={e => setCreditLines(e.target.value)} placeholder="Credit Lines" />
      <button onClick={calculateSubscriptionPrice}>Calculate</button>
      <h2>Subscription Price: {subscriptionPrice}</h2>
    </div>
  );
};

export default SubscriptionCalculator;
