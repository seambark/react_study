import { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Header from './components/header';

class App extends Component{
  state = {
    habits: [
        {id:1, name:'Reading', count:0 },
        {id:2, name:'Running', count:0 },
        {id:3, name:'Coding', count:0 },
    ]
  }

  handleIncrement = habit => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});
  };
  handleDecrement = habit => {
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      const count = habits[index].count - 1;
      habits[index].count = count < 0 ? 0 : count;
      this.setState({habits});
  };
  handleDelete = habit => {
      const habits = this.state.habits.filter(itme => itme.id !== habit.id);
      this.setState({habits});
  };

  handleAdd = habit => {
      console.log(habit)
  };
  handleReset = habit => {
    console.log(habit)
  };
  render() {
    return (
      <div className="wrap">
        <Header totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <div className="content">
          <input type="text" className="add-input "/>
          <button className="add-button" onClick={this.handleAdd}>Add</button>
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
          <button className="habits-reset" onClick={this.handleReset}>Reset All</button>
        </div>
      </div>
    );
}
}

export default App;
