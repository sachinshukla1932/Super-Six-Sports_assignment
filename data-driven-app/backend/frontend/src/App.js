// src/App.js
import React from 'react';
import FileUpload from './components/FileUpload';
import DataDisplay from './components/DataDisplay';
import SubscriptionCalculator from './components/SubscriptionCalculator';

function App() {
  return (
    <div className="App">
      <h1>Data-Driven Web Application</h1>
      <FileUpload />
      <DataDisplay />
      <SubscriptionCalculator basePrice={10} pricePerCreditLine={1} pricePerCreditScorePoint={0.1} />
    </div>
  );
}

export default App;
