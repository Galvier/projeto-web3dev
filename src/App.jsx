import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Olá Pessoal!
        </div>

        <div className="bio">
        Eu sou o Jonathan e já trabalhei com música, sabia? Legal, né? Conecte sua carteira  Ethereum wallet e me manda um cookie!
        </div>

        <button className="waveButton" onClick={wave}>
          Mandar Cookie 🍩
        </button>
      </div>
    </div>
  );
}
