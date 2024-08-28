import React, { useState } from 'react'; 
import ReactDOM from 'react-dom'; 
import './styles.css'; // Import a CSS file for styling

// Greeting Component
const Greeting = ({ name }) => {
  return <h2>Hello, {name}!</h2>;
};

// Button Component
const Button = ({ onClick }) => {
  return <button onClick={onClick}>Click Me!</button>;
};

// Main App Component
const App = () => {
  const [name, setName] = useState('React Enthusiast');
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="app-container">
      <h1>Welcome to My React App!</h1>
      <Greeting name={name} />
      <Button onClick={handleClick} />
      <p>You have clicked the button {clickCount} times.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
