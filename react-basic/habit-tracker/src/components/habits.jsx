import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const Habits = props => {
    const handleIncrement = habit => {
        props.onIncrement(habit);
    };
    const handleDecrement = habit => {
        props.onDecrement(habit);
    };
    const handleDelete = habit => {
        props.onDelete(habit);
    };
    const handleAdd = name => {
        props.onAdd(name);
    };

    return (
        <>
            <HabitAddForm onAdd={handleAdd} />
            <ul className="habits">
                { props.habits.map(habit => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
            <button className="habits-reset" onClick={props.onReset}>Reset All</button>
        </>
    );
};

export default Habits;