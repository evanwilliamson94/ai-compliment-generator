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
    "{name}, you inspire those around you!",
    "{name}, you're one in a million!",
    "{name}, you make the world brighter!",
    "Your smile is contagious, {name}!",
    "{name}, you bring so much joy to others!",
    "You have a heart of gold, {name}!",
    "The world needs more people like you, {name}!",
    "You are a true gem, {name}!",
    "{name}, you make everything better!",
    "You're such a great listener, {name}!",
    "You're unstoppable, {name}!",
    "{name}, your kindness is contagious!",
    "{name}, you’re full of wisdom!",
    "You are a treasure, {name}!",
    "You have the kindest heart, {name}!",
    "You always know what to say, {name}!",
    "You're so thoughtful, {name}!",
    "{name}, you're the definition of strength!",
    "Your energy lights up the room, {name}!",
    "{name}, you make the world a better place!",
    "You have an amazing soul, {name}!",
    "You're a shining star, {name}!",
    "{name}, you’re full of positivity!",
    "You have a great sense of humor, {name}!",
    "{name}, you're so talented!",
    "You’re a joy to be around, {name}!",
    "You’re an amazing friend, {name}!",
    "{name}, you're the best part of everyone's day!",
    "You are a breath of fresh air, {name}!",
    "{name}, your kindness is endless!",
    "You inspire confidence in others, {name}!",
    "You're such a positive influence, {name}!",
    "{name}, you always see the bright side!",
    "You are pure magic, {name}!",
    "Your creativity knows no bounds, {name}!",
    "You have the most infectious laugh, {name}!",
    "{name}, you have the kind of smile that can light up the darkest room!",
    "You're a ray of sunshine, {name}!",
    "{name}, you radiate joy wherever you go!",
    "You are a legend, {name}!",
    "You're a masterpiece, {name}!",
    "{name}, you bring so much love to the world!",
    "You're a natural at everything you do, {name}!",
    "You're a visionary, {name}!",
    "You bring peace to those around you, {name}!",
    "{name}, you make every day feel like an adventure!",
    "You are so fun to be around, {name}!",
    "{name}, your heart is as big as the universe!",
    "You make even the ordinary feel extraordinary, {name}!",
    "{name}, you're full of surprises!",
    "You're one of a kind, {name}!",
    "You’re a marvel, {name}!",
    "{name}, you are bold, brilliant, and brave!",
    "You're always growing and improving, {name}!",
    "You make everything seem possible, {name}!",
    "You're a breath of fresh air, {name}!",
    "You spread positivity like wildfire, {name}!",
    "{name}, you're always one step ahead!",
    "You're like a human ray of sunshine, {name}!",
    "{name}, you make every day feel special!",
    
    // Funny Compliments (15)
    "You must be made of copper and tellurium because you're Cu-Te, {name}!",
    "{name}, you're like a cloud—because every time I see you, my day gets brighter!",
    "If you were a vegetable, {name}, you'd be a cute-cumber!",
    "{name}, you’re the human equivalent of a Sunday morning!",
    "You’re like a high-five for my soul, {name}!",
    "You’re the cheese to my macaroni, {name}!",
    "{name}, if you were a fruit, you’d be a fineapple!",
    "If you were a dessert, {name}, you'd be the sweetest one in the bakery!",
    "{name}, you're cooler than a polar bear's toenails!",
    "{name}, if you were a potato, you'd be a hot potato!",
    "If you were a superhero, your superpower would be making people laugh, {name}!",
    "{name}, you're like a breath of fresh air... in a room full of puppies!",
    "{name}, you're as comforting as a warm blanket on a cold day!",
    "You’re the human version of a perfect cup of coffee, {name}!",
    "You make awkward situations less awkward just by being you, {name}!"
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

  // Handle key press (Enter key for form submission)
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      generateCompliment();
    }
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
          onKeyPress={handleKeyPress} // Listen for Enter key press
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