import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar, Location, MainInfo, DaysList, HourlyDetails} from './components/index'

function App() {
  const [degree, setDegree] = useState(true)
  const changedegree = ()=>{
    setDegree(!degree)
  }
  return (
    <>
     <Navbar degree={degree} changedegree={changedegree}/>
     <main>
       <Location/>
       <MainInfo/>
       <h4>5 days forcast</h4>
       <DaysList/>
       <HourlyDetails/>
     </main>
    </>
  );
}

export default App;
