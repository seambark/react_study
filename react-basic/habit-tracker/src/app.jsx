import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import './app.css';
import Habits from './components/habits';
import Header from './components/header';


const App = () => {
  const [habits, setHabits] = useState([
        {id:1, name:'Reading', count:0 },
        {id:2, name:'Running', count:0 },
        {id:3, name:'Coding', count:0 },
    ]);

  const handleIncrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if(item.id === habit.id){
          return {...habit, count: habit.count + 1};
        }
        return item;
      })
    );
  },[]);

  const handleDecrement = useCallback(habit => {
    setHabits( habits =>
      habits.map(item => {
        if(item.id === habit.id){
          const count = habit.count - 1;
          return {...habit, count: count < 0 ? 0 : count};
        }
        return item;
      })
    );
  },[]);

  const handleDelete = useCallback(habit => {
    setHabits(habits.filter(itme => itme.id !== habit.id));
  },[]);
  const handleAdd = useCallback(name => {
    setHabits(habits = [...habits, { id:Date.now(), name, count:0}]);
  },[]); 

  const handleReset = useCallback(() => {
    setHabits(habits =>
      habits.map(habit => {
        if(habit.count !== 0){
          return {...habit, count: 0};
        }
        return habit;
      })
    );
  },[]);

  return (
    <div className="wrap">
      <Header totalCount={habits.filter(item => item.count > 0).length}/>
      <div className="content">
        <Habits
          habits={habits}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onAdd={handleAdd}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default App;
