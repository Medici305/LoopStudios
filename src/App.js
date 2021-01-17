import React, { useState } from 'react';
import "./styles/App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  // State
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      <Header isActive={isActive} setIsActive={setIsActive} />
      <Menu isActive={isActive} setIsActive={setIsActive} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
