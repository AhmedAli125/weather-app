import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'
import './weatherapp.css'

function WeatherApp(props) {

    const [feelsLike, setFeelsLike] = useState('');
    const [temp, setTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [pressure, setPressure] = useState('');
    const [name, setName] = useState('')
    const [error, setError] = useState('');



    let apiKey = 'f6de1921da6370a80d199d6e963a41b1'
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=metric`)
            .then((resolve) => resolve.json())
            .then((data) => {
                setFeelsLike(data.main.feels_like)
                setHumidity(data.main.humidity)
                setPressure(data.main.pressure)
                setTemp(data.main.temp)
                setName(data.name)
            })
            .catch(err => setError(err))
    })
    
    return (
        <div>
            {error ? 
                <div className='container'>
                    <h2 className='h3 text-center text-danger'>No Records Found!</h2>
                </div>
             : name ? <div>
                <div className='container'>
                    <h2 className='h2 text-muted text-center mt-4'>{ name }</h2>
                    <div className='container'>
                        <ul
                            className='list-group list-group-flush mt-3'
                        >
                            <li className = 'list-group-item m-2 p-2 fs-5'>
                                <i className="far fa-meh"></i>Feels Like : {feelsLike} Celsius
                            </li>
                            <li className = 'list-group-item m-2 p-2 fs-5' >
                                <i className="fas fa-thermometer-full"></i>Temperature : {temp} Celsius
                            </li>
                            <li className = 'list-group-item m-2 p-2 fs-5'>
                                <i className="fas fa-temperature-low"></i>Humidity : {humidity}
                            </li>
                            <li className = 'list-group-item m-2 p-2 fs-5'>
                                <i className="fas fa-weight"></i>Pressure : {pressure}
                            </li>
                        </ul>
                    </div>
                </div>
            </div> : <Spinner />}
            <button
                className="btn btn-outline-danger fs-5 mt-3"
                style={{width:'100%'}}
                type="button"
                id="button-addon2"
                onClick={ props.toggleWeatherApp }
            >
                Return
            </button>          
        </div>
    )
}

export default WeatherApp