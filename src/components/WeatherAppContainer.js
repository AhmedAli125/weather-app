import React, {useState} from 'react'
import WeatherApp from './WeatherApp'
import './weatherapp.css'

function WeatherAppContainer() {
    const [cityName, setCityName] = useState('');
    const changeCityName = e => setCityName(e.target.value)
    
    const [disabled, setDisable] = useState(false)
    const handleDisable = () => {
        setDisable(!disabled)
    }

    const [showWeatherApp, setShowWeatherApp] = useState(false);
    const toggleWeatherApp = () => {
        setShowWeatherApp(!showWeatherApp)
        handleDisable()
    }

    const clearText = () => {
        setCityName('');
    }


    return (
        <div
            className='container mt-5'
        >
            <h1
                className='text-center mt-5 pt-5 h1'
            >
                Weather Application
            </h1>  
            <div
                // className='search-container'
            >
                <div className="input-group mb-3 mt-4">
                    <input
                        type="text"
                        value={ cityName }
                        className="form-control fs-5"
                        placeholder="Enter City Name"
                        aria-label="Entger City Name"
                        aria-describedby="button-addon2"
                        onChange={changeCityName}
                        disabled = {disabled}
                    />
                    <button
                        className = "btn btn-outline-secondary fs-5"
                        type="button"
                        id="button-addon2"
                        onClick={clearText}
                        // disabled={disabled}
                    >
                        <i className="fas fa-undo fs-6"></i>
                         Clear
                    </button>
                    <button
                        className = "btn btn-outline-primary fs-5"
                        type="button"
                        id="button-addon2"
                        onClick={toggleWeatherApp}
                        disabled={disabled}
                    >
                        <i className="fas fa-database  fs-6"></i>
                        Get Data
                    </button>
                </div>
            </div>
            
            {showWeatherApp ? <WeatherApp cityName={ cityName } toggleWeatherApp={ toggleWeatherApp }/> : null}
        </div>
    )
}

export default WeatherAppContainer
