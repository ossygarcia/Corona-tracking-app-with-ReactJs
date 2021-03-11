import React from 'react'
import './App.module.css'
import { Cards, Charts, CountryPicker } from './components/import'
import { fetchData } from './api/External'
import styles from './App.module.css'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount () {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }
  handleCountry = async country => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country })
  }
  render () {
    const { data,country } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountry={this.handleCountry} />
        <Charts data={data} country={country} />
      </div>
    )
  }
}

export default App
