import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 85 },
    { name: "Dhoni", score: 68 },
    { name: "Jadeja", score: 45 },
    { name: "Kohli", score: 75 },
    { name: "Shami", score: 60 },
    { name: "Ashwin", score: 89 },
    { name: "Rahul", score: 55 },
    { name: "Bumrah", score: 92 },
    { name: "Gill", score: 35 },
    { name: "Iyer", score: 80 },
  ];

  // Arrow function for filtering
  const filteredPlayers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score {'<'} 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
