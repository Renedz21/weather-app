import React from 'react'

const WeatherCard = ({ weather }) => {
    return (
        <div className='weather-card'>
            <div className="card-header">
                <div className='weather-data'>
                    <p className="weather-city">
                        {weather ? (weather.name + " " + weather.sys.country) : 'No ha seleccionado una ciudad'}
                    </p>
                    <p className="weather-description">
                        {weather ? (weather.weather[0].description) : ''}
                    </p>
                </div>
                <img className='weather-icon' src={`icons/${weather ? (weather.weather[0].icon) : 'unknown'}.png`} alt={'weather'} />
            </div>
            <div className="card-body">
                <h2 className="weather-temp">
                    {weather ? `${Math.round(weather.main?.temp)}°C` : ""}
                </h2>
                {weather ? (
                    <div className="weather-details">
                        <div className="parameters">
                            <span className="param-label-title">Detalles</span>
                        </div>
                        <div className="parameters">
                            <span className="param-label">Sensación Térmica:</span>
                            <span className="param-val">
                                {weather ? (weather.main?.feels_like).toFixed(2) : "0"}°C
                            </span>
                        </div>
                        <div className="parameters">
                            <span className="param-label">Humedad: </span>
                            <span className="param-val">
                                {weather ? (weather.main?.humidity) : "0"} %
                            </span>
                        </div>
                        <div className="parameters">
                            <span className="param-label">Presión: </span>
                            <span className="param-val">
                                {weather ? (weather.main?.pressure) : "0"} hPs
                            </span>
                        </div>
                    </div>
                ) : ""}
            </div>
        </div>
    )
}

export default WeatherCard