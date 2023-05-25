import Weather from './component/Weather'
import WeaterForm from './component/weaterForm'
import { CityContextProvider } from './context/CityContext'
import './App.css'

function App() {
  return (
    <>
      <CityContextProvider>
        <WeaterForm />
        <Weather />
      </CityContextProvider>
    </>
  )
}

export default App
