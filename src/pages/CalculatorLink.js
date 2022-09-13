import React from 'react';
import '../components/App.css';
import CalculatorContainer from '../components/Calculator';

const CalculatorLink = () => {
  <>
    <section className='conatiner calculator-section'>
      <h2 className='secondTitle'> Let&apos;s do some math! </h2>
      <div className="calculator">
        <CalculatorContainer />
      </div>
    </section>
  </>
};

export default CalculatorLink;