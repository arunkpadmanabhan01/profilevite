import React, { useState } from 'react';
import './FarmerProfile.css';

const FarmerProfile = () => {
  const [grains, setGrains] = useState([]);
  const [newGrain, setNewGrain] = useState('');

  const addGrain = () => {
    if (newGrain.trim()) {
      setGrains([...grains, newGrain]);
      setNewGrain('');
    }
  };

  const removeGrain = (index) => {
    setGrains(grains.filter((_, i) => i !== index));
  };

  return (
    <div className="farmer-profile">
      <h1>Farmer Profile</h1>
      <input
        type="text"
        value={newGrain}
        onChange={(e) => setNewGrain(e.target.value)}
        placeholder="Enter grain name"
      />
      <button onClick={addGrain}>Add Grain</button>
      <ul>
        {grains.map((grain, index) => (
          <li key={index}>
            {grain} <button onClick={() => removeGrain(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FarmerProfile;
