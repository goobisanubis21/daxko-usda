import { React } from 'react'

const HomeComp = () => {

    // const USDA_URL = "https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=rTCM1DqeIDLeCShyqxcRK6OJWssuxxKlTl0FylLQ";
    // const API_KEY = 'rTCM1DqeIDLeCShyqxcRK6OJWssuxxKlTl0FylLQ'

    function handleSearch() {
        let search = document.querySelector('.search').value
        fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${search}&pageSize=2&api_key=rTCM1DqeIDLeCShyqxcRK6OJWssuxxKlTl0FylLQ`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div>
            <div>
                <input className='search' placeholder='Enter a Food'></input>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default HomeComp
