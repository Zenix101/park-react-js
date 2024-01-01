// ParkingExit.js
import React, { useState } from 'react';

const ParkingExit = () => {
  const [uniqueCode, setUniqueCode] = useState('');

  const handleExit = async () => {
    try {
      console.log('Attempting to exit with unique code:', uniqueCode);
  
      const response = await fetch('http://localhost:5000/api/exit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ uniqueCode }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Exit successful:', data);
        // Handle success or display relevant information to the user
      } else {
        const errorData = await response.json();
        console.error('Exit failed. Response status:', response.status, 'Error:', errorData.error);
        // Handle failure or display an error message to the user
      }
    } catch (error) {
      console.error('Error during exit:', error);
      // Handle error or display an error message to the user
    }
  };
  

  return (
    <div>
      <h2>Parking Exit</h2>
      <label>Unique Code:</label>
      <input type="text" value={uniqueCode} onChange={(e) => setUniqueCode(e.target.value)} />
      <button type="button" onClick={handleExit}>Exit</button>
    </div>
  );
};

export default ParkingExit;