import { useState } from 'react';
import './../styles/calculator.css';
import ZakatSelector from '../components/ZakatSelector';
import ZakatMaalCalculator from '../components/ZakatMaal';
import ZakatFitrahCalculator from '../components/ZakatFitrah';

function Calculator() {
  const [currentPage, setCurrentPage] = useState('hero');

  return (
    <>
      {currentPage === 'hero' && (
        <ZakatSelector onSelect={(type) => setCurrentPage(type)} />
      )}

      {currentPage === 'maal' && (
        <ZakatMaalCalculator />
      )}

      {currentPage === 'fitrah' && (
        <ZakatFitrahCalculator />
      )}
    </>
  );
}

export default Calculator;
