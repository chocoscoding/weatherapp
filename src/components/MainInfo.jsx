import React from 'react'
import {RiFahrenheitFill, RiCelsiusFill} from 'react-icons/ri'

const MainInfo = () => {
    return (
        <div className='mainInfoContainer'>
            <p className="topHeading">CURRENT WEATHER</p>
            <p className="topTime">11:30pm</p>

            <div className="mainDataCont">
                <img src="" alt="data" className="icon" />
                <div className="temp">
                    <p>26</p> 
                    <RiFahrenheitFill/>
                </div>
            </div>
            <p className="mainCondition">
                Haze
            </p>
            <div className="btminfocnt">

            
            <div className="bottomInfo">
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> WIND</p>
                    5 km/h
                </div>
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> VISIBILTY</p>
                    5 km/h
                </div>
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> DEW POINT</p> 
                    5 km/h
                </div>
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> PRESSURE</p>
                    5 km/h
                </div>
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> HUMITY</p>
                    5 km/h
                </div>
            </div>
            </div>
        </div>
    )
}

export default MainInfo
