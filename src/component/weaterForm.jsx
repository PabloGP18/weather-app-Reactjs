import { useContext, useCallback, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

import Context from '../context/CityContext'

import './form.css'

const WeaterForm = () => {
  const { setCity } = useContext(Context)
  const [inputValue, SetInputValue] = useState('')

  const handleChange = useCallback((e) => {
    SetInputValue(e.target.value)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(inputValue)
  }

  return (
    <>
      {/* overlay */}
      <div className='bg-container'>
        {/* background image */}
        <img
          className='bg-image'
          src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80'
        />
      </div>
      {/* Search */}
      <div className='form-container'>
        <form className='form-weather' onSubmit={handleSubmit}>
          <div>
            <input
              className='form-input'
              type='text'
              placeholder='Search city'
              onChange={handleChange}
            />
          </div>
          <button className='form-button' type='submit'>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
    </>
  )
}

export default WeaterForm
