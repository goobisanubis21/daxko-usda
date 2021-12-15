import { React, useState } from 'react';
import InfoComp from '../InfoComp/InfoComp';
import NavComp from '../NavComp/NavComp';

import './homeComp.css';

const HomeComp = () => {

    // const USDA_URL = "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=rTCM1DqeIDLeCShyqxcRK6OJWssuxxKlTl0FylLQ";
    // const API_KEY = 'rTCM1DqeIDLeCShyqxcRK6OJWssuxxKlTl0FylLQ'


    const [data, setData] = useState([])
    const [clickedData, setClickedData] = useState([])
    const [cartNum, setCartNum] = useState(0)

    function getSearch(e) {
        e.preventDefault()
        let search = document.querySelector('.search').value
        handleSearch(search)
    }

    function handleSearch(food) {
        fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&pageSize=10&api_key=rTCM1DqeIDLeCShyqxcRK6OJWssuxxKlTl0FylLQ&dataType=Survey (FNDDS)`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const foodArray = []
                foodArray.push(data)
                setData(foodArray)
            })
            .catch(err => console.log(err))
    }

    function index() {
        let i = 0
        i++
        return i
    }

    function showInfo(e) {
        setClickedData(data[0].foods.filter(food => food.fdcId === parseInt(e.target.id)))
        let infoContainer = document.getElementById('info-container')
        if (infoContainer.getAttribute('class') === 'hidden') {
            infoContainer.removeAttribute('class', 'hidden')
            infoContainer.setAttribute('class', 'show')
        }

    }

    function hideInfo() {
        let infoContainer = document.getElementById('info-container')
        infoContainer.removeAttribute('class', 'show')
        infoContainer.setAttribute('class', 'hidden')
    }

    function saveToCart() {
        let storage = JSON.parse(localStorage.getItem('savedFoodItems'))
        if (storage === null) {
            storage = []
        }
        let foodItem = {
            id: clickedData[0].fdcId,
            name: clickedData[0].description,
            cal: clickedData[0].foodNutrients[3].value
        }
        storage.push(foodItem)
        localStorage.setItem('savedFoodItems', JSON.stringify(storage))
        setCartNum(cartNum +1)
    }


    return (
        <div>
            <NavComp 
                num={cartNum}
            />
            <div className='title-container'>
                <h1>Food Finder</h1>
                <p>Search the USDA database for a type of food and get all the info you need.</p>
                <p>Create a list of saved foods you are interested in</p>
            </div>
            <div className='search-container'>
                <form onKeyDown={(e) => e.key === '13' ? getSearch : ''}>
                    <input className='search' placeholder='Enter a Food'></input>
                    <button className='search-btn' onClick={getSearch}>Search</button>
                </form>
            </div>
            <div className='main-content'>
                {data.map(food => (
                    food.totalHits === 0
                        ?
                        <div key={food.totalHits}>
                            <p>Item Not Found</p>
                        </div>
                        :
                        <div key={index}>
                            {food.foods.map(item => (
                                <div key={item.fdcId}>
                                    <h2 className='searched-list-items' id={item.fdcId} onClick={showInfo}>{item.description}</h2>
                                </div>
                            ))}
                            <div id='info-container' className='hidden'>
                                <InfoComp
                                    data={clickedData}
                                    hideInfo={hideInfo}
                                    saveToCart={saveToCart}
                                />
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default HomeComp
