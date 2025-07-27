import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Steeve";
  const school = "DNV Public School";
  const total = 284;
  const goal = 300;
  const percentage = ((total / goal) * 100).toFixed(2);

  return (
    <div className="container">
      <h1 className="heading">Student Details:</h1>
      <p><span className="label blue">Name:</span> <span className="value blue"> {name}</span></p>
      <p><span className="label red">School:</span> <span className="value red">{school}</span></p>
      <p><span className="label red">Total:</span> <span className="value">{total}Marks</span></p>
      <p><span className="label green">Score:</span> <span className="value green">{percentage}%</span></p>
    </div>
  );
}

export default CalculateScore;
