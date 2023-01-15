import React from 'react';
import { useState, useEffect } from 'react';
import "./style.css";
import WeatherCard from './WeatherCard';
import WeatherPage from './WeatherPage';

const Temp = () => {
    const [searchValue, setsearchValue] = useState("lohaghat")
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7313fd78c9de534711daba75b6101486`;

            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };
            setTempInfo(myNewWeatherInfo)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>

            <WeatherPage searchValue={searchValue} setsearchValue={setsearchValue} getWeatherInfo={getWeatherInfo} />
            <WeatherCard tempInfo={tempInfo} />

        </>
    )
}
export default Temp
