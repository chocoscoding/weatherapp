import React from "react";
import {WiDegrees} from 'react-icons/wi'
import {BsFillDropletFill} from 'react-icons/bs'

const DaysList = ({setForecast,degree, fetchedInfo}) => {
  console.log(degree);
  const {forecastday} = fetchedInfo.forecast;


  const getday=(date)=>{
    const day = new Date(date).toDateString();
    const year = new Date().getFullYear().toString()

    const dayA = day.split(year)[0]
    return dayA
  }
    const showCurrent = (tgt)=>{
      const allElement = document.querySelectorAll('.daysListChildren');
      allElement.forEach((item)=>{
        item.className = 'daysListChildren'
        })
        const switchKey = tgt.id
        let element = tgt.parentElement
        switch (switchKey) {
          case 'daysMinInfo':
          case 'dm1':
            element.classList.toggle('daysActive')
            break;
            case 'dm2':
            case 'dm8':
            case 'dm5':
              element = tgt.parentElement.parentElement
            element.classList.toggle('daysActive')
            break;
          case 'dm3':
          case 'dm4':
          case 'dm6':
          case 'dm7':
            element = tgt.parentElement.parentElement.parentElement
            element.classList.toggle('daysActive')
            break;
            case 'dm9':
              element = tgt.parentElement.parentElement.parentElement.parentElement
              element.classList.toggle('daysActive')
              break;
              
              default:
                tgt.classList.toggle('daysActive')
                break;
              }
              setForecast(Number(element.id))
              
    }
  return (
    <div className="btminfocnt">
      <div className="daysListContainer">
        {forecastday.map((item,index)=>{
          const {avghumidity, maxtemp_c, maxtemp_f, mintemp_c, mintemp_f} = item.day;
          const {text, icon}= item.day.condition;
          const {date} = item
          if(index === 0){
            return (
              <div className="daysListChildren daysActive" id={`${index}`}  key={index} onClick={(e)=> showCurrent(e.target)}>
                <p id="daysMinInfo">{getday(date)} </p>
                            <div className="daysMinInfoBody"  id="dm1">
              <img src={icon} alt={`img${index}`} className="dic"  id="dm2"/>
              <div className="degd" id="dm8">
                
                <p id="dm3">{degree? maxtemp_f : maxtemp_c}<WiDegrees  id="dm9" style={{fontSize: '1.6rem'}}/> </p>
                <p id="dm4">{degree? mintemp_f : mintemp_c}<WiDegrees id="dm9"  style={{fontSize: '1.6rem'}}/> </p>
              </div>
              <div className="mims" id="dm5">
                <p id="dm6">{text}</p>
                <br />
                <p id="dm7"> <BsFillDropletFill  id="dm9" style={{fontSize:'0.7rem'}}/>  {avghumidity}%</p>
              </div>
            </div>
              </div>
            )

          } 
          else{

            return (
              <div className="daysListChildren " key={index} id={`${index}`} onClick={(e)=> showCurrent(e.target)}>
              <p id="daysMinInfo">{getday(date)} </p>
                          <div className="daysMinInfoBody"  id="dm1">
              <img src={icon} alt={`img${index}`} className="dic"  id="dm2"/>
              <div className="degd" id="dm8">
                
                <p id="dm3">{degree? maxtemp_f : maxtemp_c}<WiDegrees  id="dm9" style={{fontSize: '1.6rem'}}/> </p>
                <p id="dm4">{degree? mintemp_f : mintemp_c}<WiDegrees id="dm9"  style={{fontSize: '1.6rem'}}/> </p>
              </div>
              <div className="mims" id="dm5">
                <p id="dm6">{text}</p>
                <br />
                <p id="dm7"> <BsFillDropletFill  id="dm9" style={{fontSize:'0.7rem'}}/>  {avghumidity}%</p>
              </div>
            </div>
            </div>
          )
        }
        })}
      </div>
    </div>
  );
};

export default DaysList;
