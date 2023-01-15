import React from 'react'

const WeatherPage = ({ searchValue, setsearchValue, getWeatherInfo }) => {
    return (
        <>
            <div className='wrap'>
                <div className="search">
                    <input type="search" placeholder='search...' autoFocus id='search' className='searchTerm' value={searchValue} onChange={(e) => setsearchValue(e.target.value)} />
                    <button className="searchButton" type='button' onClick={getWeatherInfo}>Search</button>
                </div>
            </div>
        </>
    )
}

export default WeatherPage
