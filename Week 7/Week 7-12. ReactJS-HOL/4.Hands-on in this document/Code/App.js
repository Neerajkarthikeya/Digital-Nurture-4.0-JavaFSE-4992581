import React, { useState } from 'react';
import './App.css';

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>
      <p>You can now book your tickets!</p>
      <button>Book Flight</button>
    </div>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>
      <p>You can browse flights but must log in to book.</p>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  let button = isLoggedIn ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} />
  );

  return (
    <div style={{ margin: '40px', textAlign: 'center' }}>
      <Greeting isLoggedIn={isLoggedIn} />
      <br />
      {button}
    </div>
  );
}

export default App;
