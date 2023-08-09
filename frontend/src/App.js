import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Deposit from './components/Deposit';
import TransactionInfo from './components/TransactionInfo';
import WithdrawForm from './components/Withdraw';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Token Approval App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/deposit">Deposit</Link>
            <Link to="/transaction-info">Transaction Info</Link>
            <Link to="/withdraw"> Withdraw Form</Link>
          </nav>
        </header>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/deposit" element={<Deposit/>} />
          <Route exact path="/transaction-info" element={<TransactionInfo/>} />
          <Route exact path="/withdraw" element={<WithdrawForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

