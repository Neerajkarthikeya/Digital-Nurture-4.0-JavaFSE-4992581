import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      cohortCode: 'INTADMDF10',
      technology: '.NET FSD',
      startDate: '2024-01-15',
      currentStatus: 'Ongoing',
      coachName: 'Anil',
      trainerName: 'Suresh'
    },
    {
      cohortCode: 'INTADMUI20',
      technology: 'UI/UX',
      startDate: '2024-02-01',
      currentStatus: 'Completed',
      coachName: 'Priya',
      trainerName: 'Manoj'
    },
    {
      cohortCode: 'INTADMDATA30',
      technology: 'Data Science',
      startDate: '2024-03-01',
      currentStatus: 'Ongoing',
      coachName: 'Kavitha',
      trainerName: 'Ravi'
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cohort Tracker</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
