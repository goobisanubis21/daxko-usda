import React from 'react';
import './infoComp.css'

const InfoComp = (props) => {

    function saveToCart() {
        let storage = JSON.parse(localStorage.getItem('savedFoodItems'))
        if(storage === null) {
            storage = []
        }
        let foodItem = {
            name: props.data[0].description,
            cal: props.data[0].foodNutrients[3].value
        }
        storage.push(foodItem)
        localStorage.setItem('savedFoodItems', JSON.stringify(storage))
    }

    if (props.data[0] === undefined) {
        return (
            <div></div>
        )
    } else {

        return (
            <div>
                <div className='modal'>
                    <div className='x-container'>
                        <h2 className='x' onClick={props.hideInfo}>X</h2>
                    </div>
                    <div>
                        <h2>{props.data[0].description}</h2>
                        <p><strong>{props.data[0].foodNutrients[8].nutrientName}</strong> {props.data[0].foodNutrients[8].value} {props.data[0].foodNutrients[8].unitName}</p>
                        <p><strong>{props.data[0].foodNutrients[0].nutrientName}</strong> {props.data[0].foodNutrients[0].value} {props.data[0].foodNutrients[0].unitName}</p>
                        <p><strong>{props.data[0].foodNutrients[1].nutrientName}</strong> {props.data[0].foodNutrients[1].value} {props.data[0].foodNutrients[1].unitName}</p>
                        <p><strong>{props.data[0].foodNutrients[2].nutrientName}</strong> {props.data[0].foodNutrients[2].value} {props.data[0].foodNutrients[2].unitName}</p>
                        <p><strong>{props.data[0].foodNutrients[3].nutrientName}</strong> {props.data[0].foodNutrients[3].value} {props.data[0].foodNutrients[3].unitName}</p>
                    </div>
                    <button onClick={saveToCart} className='save-btn'>Save To Cart</button>
                </div>
            </div>
        )
    }

}

export default InfoComp
