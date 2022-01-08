import React from 'react'
import {RiFahrenheitFill, RiCelsiusFill} from 'react-icons/ri'

const MainInfo = ({fetchedInfo, degree}) => {
    console.log(fetchedInfo);
    const {localtime} = fetchedInfo.location;
    const {text, icon} = fetchedInfo.current.condition;
    const {temp_c, temp_f, wind_mph, humidity, vis_km, pressure_mb, wind_dir} = fetchedInfo.current;

    return (
        <div className='mainInfoContainer'>
                <img src='https://source.unsplash.com/1600x900/?darkforest' alt='img' className="bdropImg"></img>
                <div className='cover'>
            <p className="topHeading">CURRENT WEATHER</p>
            <p className="topTime">{localtime}</p>

            <div className="mainDataCont">
                <img src={icon} alt="data" className="icon" />
                <div className="temp">
                    {degree ? (<>
                    <p style={{fontWeight: '900', fontSize: '3.4rem'}}>{temp_f}</p> 
                    <RiFahrenheitFill style={{ fontSize: '1.8rem'}}/>
                    </>) : (<>
                    <p style={{fontWeight: '900', fontSize: '3.4rem'}}>{temp_c}</p> 
                    <RiCelsiusFill style={{ fontSize: '1.8rem'}}/>
                    </>)}
                    
                </div>
            </div>
            <p className="mainCondition">
                {text}
            </p>
            <div className="btminfocnt">

            
            <div className="bottomInfo">
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> WIND DIR</p>
                    {wind_dir}
                    
                </div>
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> VISIBILTY</p>
                    {vis_km} km
                </div>
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> WIND SPEED</p> 
                    {wind_mph} m/h
                </div>
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> PRESSURE</p>
                    {pressure_mb} mb
                </div>
                <div className="bottomInfoChildren">
                    <p className="bottomInfoTitle"> HUMIDTY</p>
                    {humidity}%
                </div>
            </div>
            </div>
                </div>
        </div>
    )
}

export default MainInfo
