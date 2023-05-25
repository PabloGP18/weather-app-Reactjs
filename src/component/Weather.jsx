import { useContext } from 'react'
import useWeatherData from '../hooks/useWeatherData'
import Context from '../context/CityContext'

import './weather.css'

const Weather = () => {
  const { city } = useContext(Context)
  const { weatherData, isLoading, error } = useWeatherData({
    city: city
  })

  if (isLoading)
    return (
      <>
        <p>Loading...</p>
      </>
    )
  if (error)
    return (
      <>
        <p>404 Error....</p>
      </>
    )

  return (
    <>
      {weatherData && (
        <div className='container-weather'>
          {/* top */}
          <div className='top'>
            <div className='image-top'>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                alt='/'
                width='100'
                height='100'
              />
              <p className='top-main'>{weatherData?.weather[0].main}</p>
            </div>
            <p className='top-temp'>
              {weatherData?.main.temp.toFixed(0)}&#176;
            </p>
          </div>
          {/* bottom */}
          <div className='bottom'>
            <p className='bottom-city'>Weather in {weatherData?.name}</p>
            <div className='bottom-Weather-info-container'>
              <div>
                <p className='bottom-weather-info'>
                  {weatherData?.main.feels_like.toFixed(0)}&#176;
                </p>
                <p className='bottom-text-info'>Feels like</p>
              </div>
              <div>
                <p className='bottom-weather-info'>
                  {weatherData?.main.humidity}%
                </p>
                <p className='bottom-text-info'>Humidity</p>
              </div>
              <div>
                <p className='bottom-weather-info'>
                  {weatherData?.wind.speed.toFixed(0)}KMH
                </p>
                <p className='bottom-text-info'>Winds</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Weather
