import React from 'react';
import NavComp from '../NavComp/NavComp';

import './cartComp.css';

const CartComp = () => {

    const storage = JSON.parse(localStorage.getItem('savedFoodItems'))
    if (storage === null || storage.length === 0) {
        return (
            <>
                <NavComp />
                <div className='cart-container'>
                    <h1>Cart</h1>
                    <h2>Cart is Currently Empty</h2>
                </div>
            </>
        )
    } else {

        let calArray = []

        for (let i = 0; i < storage.length; i++) {
            calArray.push(storage[i].cal)
        }

        let totalCals = calArray.reduce((a, b) => {
            return a + b
        }, 0)

        function removeItem(e) {
            let newStorage = storage.filter(remove => remove.id !== parseInt(e.target.id))
            console.log(newStorage)
            localStorage.setItem('savedFoodItems', JSON.stringify(newStorage))
            window.location.reload()
        }

        return (
            <>
                <NavComp />
                <div className='cart-container'>
                    <h1>Cart</h1>
                    {storage.map(item => (
                        <div key={item.id} className='cart-card'>
                            <h3>{item.name}</h3>
                            <p><strong>Calories:</strong> {item.cal} KCAL</p>
                            <button onClick={removeItem} id={item.id} className='remove-btn'>Remove</button>
                        </div>
                    ))}
                    <div>
                        <h2>Current Calorie Count: {totalCals} KCAL</h2>
                    </div>
                </div>
            </>
        )
    }

}

export default CartComp
