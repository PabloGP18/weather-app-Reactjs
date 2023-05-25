import { API_KEY, API_URL } from './settings'

const getWeatherData = ({ city }) => {
  const URL = `${API_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  return fetch(URL)
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText)
      return res.json()
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.error(error)
      return null
    })
}

export default getWeatherData
