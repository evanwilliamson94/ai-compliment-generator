import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [compliment, setCompliment] = useState('');

  const compliments = [
    "You're amazing, {name}!",
    "The world is better with you, {name}.",
    "{name}, you're a natural star!",
    "{name}, you brighten every room!",
    "You're unstoppable, {name}!",
    "{name}, you’re a gift to those around you!",
    "{name}, you light up the room!",
    "You have the best laugh, {name}!",
    "{name}, you bring out the best in other people!",
    "You're a true friend, {name}!",
    "You're a shining star, {name}!",
    "{name}, you're a beacon of light.",
    "Your energy is contagious, {name}!",
    "You have an amazing soul, {name}.",
    "You're the embodiment of kindness, {name}.",
    "{name}, you always know how to brighten someone's day.",
    "You make the world a better place, {name}.",
    "You are a masterpiece, {name}!",
    "You are a joy to everyone around you, {name}.",
    "Your presence is a gift, {name}.",
    "You have a heart of gold, {name}.",
    "You're the definition of strength, {name}.",
    "You make people smile without even trying, {name}.",
    "{name}, you're an inspiration to many.",
    "You're a treasure, {name}.",
    "{name}, your kindness makes the world a better place.",
    "You bring out the best in people, {name}.",
    "{name}, you're the best part of everyone's day.",
    "You have the most beautiful soul, {name}.",
    "Your confidence is inspiring, {name}."
  ];

  const generateCompliment = () => {
    if (name.trim() === '') {
      setCompliment("Please enter your name to get a compliment!");
      return;
    }

    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    const personalizedCompliment = randomCompliment.replace('{name}', name);
    setCompliment(personalizedCompliment);
  };

  return (
    <div className="container">
      {/* Particle Effects */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>

      {/* Card */}
      <div className="card">
        <h1>AI Compliment Generator</h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <button onClick={generateCompliment}>Get Compliment</button>

        {compliment && (
          <p className="compliment">
            {compliment.split(' ').map((word, index) => (
              <span key={index} style={{ marginRight: '5px' }}>
                {word}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}