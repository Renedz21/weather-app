import React, { useState } from 'react'
import WeatherCard from './components/WeatherCard'

import { getWeather } from './api'

import './App.css'

const App = () => {

  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')

  const handlChange = async (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await getWeather(city, setError);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='App'>
      <h1 className="app_heading">Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Ingrese una ciudad"
          value={city}
          onChange={handlChange}
        />
        <button type='submit'>Buscar</button>
      </form>

      {error ? (
        <p className="error">{error}</p>
      ) : (
        <WeatherCard weather={weather} />
      )}

    </div>
  )
}

export default App