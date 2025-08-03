import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currency.toLowerCase() === 'euro') {
      const result = parseFloat(amount) * 80;
      alert(`Converting to ${currency} Amount is ${result}`);
    } else {
      alert("Currency not supported.");
    }
  };

  return (
    <div>
      <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <label>Amount: </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /><br /><br />
        <label>Currency: </label>
        <textarea
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
