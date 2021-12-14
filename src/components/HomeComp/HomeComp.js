import { React, useState } from 'react';
import InfoComp from '../InfoComp/InfoComp';
import './homeComp.css';

const HomeComp = () => {

    // const USDA_URL = "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=rTCM1DqeIDLeCShyqxcRK6OJWssuxxKlTl0FylLQ";
    // const API_KEY = 'rTCM1DqeIDLeCShyqxcRK6OJWssuxxKlTl0FylLQ'


    const [data, setData] = useState([])
    const [clickedData, setClickedData] = useState([])

    function getSearch() {
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


    return (
        <div>
            <div className='search-container'>
                <input className='search' placeholder='Enter a Food'></input>
                <button className='search-btn' onClick={getSearch}>Search</button>
            </div>
            <div>
                {data.map(food => (
                    <div key={index}>
                        {food.foods.map(item => (
                            <div key={item.fdcId}>
                                <h1 id={item.fdcId} onClick={showInfo}>{item.description}</h1>

                            </div>
                        ))}
                        <div id='info-container' className='hidden'>
                            <InfoComp
                                data={clickedData}
                                hideInfo={hideInfo}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomeComp
