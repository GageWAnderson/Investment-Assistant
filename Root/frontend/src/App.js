//React Components for Main Page:
import React, { Component } from 'react';
import AppNavbar from './components/app-navbar';
import StockList from './components/stock-list';

//Bootstrap CSS (reactstrap), CSS Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <StockList />
      </div>
    );
  }
}

export default App;
