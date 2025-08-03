import React from 'react';
import './App.css';

function App() {
  const officeList = [
    {
      name: "Workspace 1",
      rent: 55000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Workspace 2",
      rent: 65000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
     },
    {
      name: "Workspace 3",
      rent: 40000,
      address: "Pune",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
     }
  ];

  return (
    <div className="App">
      <h1 style={{ color: 'darkblue', textAlign: 'center' }}>Office Space Rental App</h1>

      {officeList.map((office, index) => (
        <div key={index} style={{
          border: '1px solid gray',
          padding: '15px',
          margin: '15px',
          width: '400px',
          background: '#f9f9f9',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <img
            src={office.image}
            alt={office.name}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '4px'
            }}
          />
          <h2>{office.name}</h2>
          <p>
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              ₹{office.rent}
            </span>
          </p>
          <p><strong>Address:</strong> {office.address}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
