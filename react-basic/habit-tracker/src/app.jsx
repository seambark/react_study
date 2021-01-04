import { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component{
  handleAdd = (habit) => {
      console.log(habit)
  };
  handleReset = (habit) => {
    console.log(habit)
  };
  render() {
    return (
      <div className="wrap">
        <header className="header">
          <h1>
            <i className="fas fa-leaf logo"></i>
            Habit Tracker
            <span className="header-count">0</span>
          </h1>
        </header>
        <div className="content">
          <input type="text" className="add-input "/>
          <button className="add-button" onClick={this.handleAdd}>Add</button>
          <Habits/>
          <button className="habits-reset" onClick={this.handleReset}>Reset All</button>
        </div>
      </div>
    );
}
}

export default App;
