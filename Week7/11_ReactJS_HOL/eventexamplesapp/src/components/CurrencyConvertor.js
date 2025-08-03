import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amountInRupees, setAmountInRupees] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currency, setCurrency] = useState('EUR');
  const [conversionText, setConversionText] = useState('');

  // Conversion rates from INR
  const conversionRates = {
    EUR: 90,   // Euro
    USD: 83,   // US Dollar
    GBP: 105,  // British Pound
    JPY: 0.57, // Japanese Yen
  };

  const handleConvert = () => {
    if (!amountInRupees || isNaN(amountInRupees)) {
      setConvertedAmount(null);
      setConversionText("Please enter a valid amount in ₹.");
      return;
    }

    const rate = conversionRates[currency];
    const result = (parseFloat(amountInRupees) / rate).toFixed(2);
    setConvertedAmount(result);
    setConversionText(`Converted Amount (₹ ➝ ${currency}):`);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>

      <p>Amount in Indian Rupees (₹):</p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amountInRupees}
        onChange={(e) => setAmountInRupees(e.target.value)}
      />

      <p>Currency to convert:</p>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="EUR">Euro (€)</option>
        <option value="USD">US Dollar ($)</option>
        <option value="GBP">British Pound (£)</option>
        <option value="JPY">Japanese Yen (¥)</option>
      </select>

      <br /><br />
      <button onClick={handleConvert}>Convert</button>

      {convertedAmount && (
        <p>{conversionText} {currency} {convertedAmount}</p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
