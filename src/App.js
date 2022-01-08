import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Navbar, Location, MainInfo, DaysList, HourlyDetails, OtherEvent, Footer } from './components/index'

function App() {
  const [degree, setDegree] = useState(true);
  const [currentForcast, setCurrentForecast] = useState(0)
  const [fetchedInfo, setFetchedInfo] = useState([])
  const [location, setLocation] = useState([])
  const [processStatus, setProcessStatus] = useState({status: 'loading'})

  const changedegree = () => {
    setDegree(!degree)
  }
  const [searchLocation, setSearchLocation] = useState('London');

  function snsl(newLocation) {
    setSearchLocation(newLocation)
  }

  const setForecast=(cf)=>{
    setCurrentForecast(cf)
  }




  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4837e28711564e45b06193305220401&q=${searchLocation}&days=10&aqi=yes&alerts=no`)
      const data = await response.json();
      if (data.error) {
        throw data
      }
      else {
        setFetchedInfo(data)
        setProcessStatus({ status: 'success' })
      }


      const fetchedlocation = {
        name: data.location.name,
        country: data.location.country
      }
      setLocation(fetchedlocation)

    } catch (error) {
      setProcessStatus({ error, status: 'error' })
    }
  }, [searchLocation])
  useEffect(() => {
    fetchData()
  }, [fetchData, searchLocation])

  return (
    <>
      <Navbar degree={degree} changedegree={changedegree} snsl={snsl} />
      {
        processStatus.status === 'success' ? (<main>
          <Location {...location} />
          <MainInfo fetchedInfo={fetchedInfo} degree={degree}/>
          <h4 className='forcastHeader'>3 days forcast</h4>
          <DaysList setForecast={setForecast} degree={degree} fetchedInfo={fetchedInfo}/>
          <HourlyDetails currentForcast={currentForcast} degree={degree} fetchedInfo={fetchedInfo}/>
        </main>) : (<OtherEvent processStatus={processStatus} />)
      }
      <Footer/>

    </>
  );
}

export default App;
