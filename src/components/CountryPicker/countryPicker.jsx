import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './countryPicker.module.css'
import { fetchCountries } from '../../api/External'

const CountryPicker = ({handleCountry}) => {
  const [fetchedCountries, setFetchedCountries] = useState([])
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }
    fetchAPI()
  }, [setFetchedCountries])

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue="" onChange={(e)=>handleCountry(e.target.value)}>
        <option value=''>Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}
export default CountryPicker
