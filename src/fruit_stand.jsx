import React from 'react';

const FruitStand = ({ fruits, addApple, addOrange, clearFruit }) => (
    <div>
        <h1>Fruit Stand App</h1>
        <h2>Click the buttons below to add fruit to your cart</h2>
        <ul>
            {fruits.map((fruit, idx) => <li key={idx}>{fruit}</li>)}
        </ul>

        <button onClick={addApple}>Apple</button>
        <button onClick={addOrange}>Orange</button>
        <button onClick={clearFruit}>Clear</button>
    </div>
)

export default FruitStand;