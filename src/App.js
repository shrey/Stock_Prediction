import React from 'react';
import logo from './logo.svg';
import { Table } from './components/table/table.component.jsx'
import { DropDown } from './components/dropdown/dropdown.component.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        Stock Prediction App
      </div>
      <DropDown />
      <Table />
    </div>
  );
}

export default App;
