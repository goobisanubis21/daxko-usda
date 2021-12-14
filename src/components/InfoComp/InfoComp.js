import React from 'react';
import './infoComp.css'

const InfoComp = (props) => {

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
                        <p>{props.data[0].foodNutrients[8].nutrientName}  {props.data[0].foodNutrients[8].value} {props.data[0].foodNutrients[8].unitName}</p>
                        <p>{props.data[0].foodNutrients[0].nutrientName} {props.data[0].foodNutrients[0].value} {props.data[0].foodNutrients[0].unitName}</p>
                        <p>{props.data[0].foodNutrients[1].nutrientName} {props.data[0].foodNutrients[1].value} {props.data[0].foodNutrients[1].unitName}</p>
                        <p>{props.data[0].foodNutrients[2].nutrientName} {props.data[0].foodNutrients[2].value} {props.data[0].foodNutrients[2].unitName}</p>
                        <p>{props.data[0].foodNutrients[3].nutrientName} {props.data[0].foodNutrients[3].value} {props.data[0].foodNutrients[3].unitName}</p>
                    </div>
                    <button className='save-btn'>Save To Cart</button>
                </div>
            </div>
        )
    }

}

export default InfoComp
