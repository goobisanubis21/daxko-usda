import React from 'react';
import './infoComp.css';

const InfoComp = (props) => {

    // if there is no data to be displayed then wait for the data in order to populate card
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
                        <h2 className='data-title'>{props.data[0].description}</h2>
                        <div className='info-data'>
                            {props.data[0].additionalDescriptions === "" ? <p></p> : <p><strong>More Info: </strong> {props.data[0].additionalDescriptions}</p>}
                            <p><strong>{props.data[0].foodNutrients[8].nutrientName}</strong> {props.data[0].foodNutrients[8].value} {props.data[0].foodNutrients[8].unitName}</p>
                            <p><strong>{props.data[0].foodNutrients[0].nutrientName}</strong> {props.data[0].foodNutrients[0].value} {props.data[0].foodNutrients[0].unitName}</p>
                            <p><strong>{props.data[0].foodNutrients[1].nutrientName}</strong> {props.data[0].foodNutrients[1].value} {props.data[0].foodNutrients[1].unitName}</p>
                            <p><strong>{props.data[0].foodNutrients[2].nutrientName}</strong> {props.data[0].foodNutrients[2].value} {props.data[0].foodNutrients[2].unitName}</p>
                            <p><strong>{props.data[0].foodNutrients[3].nutrientName}(Calories)</strong> {props.data[0].foodNutrients[3].value} {props.data[0].foodNutrients[3].unitName}</p>
                        </div>
                    </div>
                    <button onClick={props.saveToCart} className='save-btn'>Save To Cart</button>
                    <p className='added-cart'>{props.added}</p>
                </div>
            </div>
        )
    }

}

export default InfoComp
