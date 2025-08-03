import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ["Virat", "Dhoni", "Ashwin"];
  const evenPlayers = ["Rohit", "Jadeja", "Rahul"];

  // Destructuring
  const [odd1, odd2, odd3] = oddPlayers;
  const [even1, even2, even3] = evenPlayers;

  // Merge feature
  const T20Players = ["Kohli", "Rohit", "Gill"];
  const RanjiPlayers = ["Pujara", "Saha", "Iyer"];
  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        <li>{odd3}</li>
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        <li>{even3}</li>
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
