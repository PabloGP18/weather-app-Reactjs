/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const Context = React.createContext({})

export function CityContextProvider({ children }) {
  const [city, setCity] = useState('')

  const value = {
    city,
    setCity
  }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default Context
