import { useState, useEffect } from 'react'
import getWeatherData from '../services/getWeatherData'

const useWeatherData = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (city) {
      setIsLoading(true)
      getWeatherData({ city })
        .then((data) => {
          setWeatherData(data)
          setIsLoading(false)
        })
        .catch((error) => {
          setError(error)
          setIsLoading(false)
        })
    }
  }, [city])

  return { weatherData, isLoading, error }
}

export default useWeatherData
