import React from 'react'

export const WeatherResponse = props => 
{
console.log(props) 
    return (
        <div>
            {props.city && 
            <>
                <h4>{props.city}, {props.country}</h4> 
                <h1>{props.weather.toUpperCase()}</h1>
                <p>Temperature: {props.temp} <sup>C</sup></p>
                {props.fils_like && <p>Fils like: {props.fils_like} <sup>C</sup></p>}
                <p>Pressure: {props.pressure} mm Hg</p>
                <p>Wind: {props.wind}m/s with gusts up to {props.gust}m/s</p>
                <p>Восход солнца: {props.sunrise}</p>
                <p>Заход солнца: {props.sunset}</p>
            </>}
            <p>{props.error}</p>  
        </div>  
    )
}