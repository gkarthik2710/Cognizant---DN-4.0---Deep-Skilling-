import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        name="Karthik" 
        school="ABC Public School" 
        total={450} 
        goal="Become a Web Developer" 
      />
    </div>
  );
}

export default App;
