import React, { useEffect, useRef, useState } from "react";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import {WiDegrees} from 'react-icons/wi'
import {BsFillDropletFill} from 'react-icons/bs'

const slide = (direction)=>{
    const screenSize = window.innerWidth;
    if(screenSize < 1000){
        if(direction === 'next'){
            document.querySelector("#hours").scrollBy(300,0)
        }else{
            document.querySelector("#hours").scrollBy(-300,0)
        }
    }
    else if(screenSize >= 1000){
        if(direction === 'next'){
            document.querySelector("#hours").scrollBy(450,0)
        }else{
            document.querySelector("#hours").scrollBy(-450,0)
        }
    }
    else if(screenSize >= 1800){
        if(direction === 'next'){
            document.querySelector("#hours").scrollBy(550,0)
        }else{
            document.querySelector("#hours").scrollBy(-550,0)
        }
    }
}
const HourlyDetails = ({fetchedInfo, currentForcast}) => {
    const [fecthedData, setfecthedData] = useState([])
  const scrollHoursBody = useRef(null);


  const move = (position) => {
    if(position === 'next'){
        slide('next')
    }else{
        slide('prev')
    }


  };

  const interSect = () => {
    const hlcc = document.querySelector("#c1");
    const hlcc2 = document.querySelector("#c2");
    const next= document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const sectionOneOptions = {};
    const sectionOneObserver = new IntersectionObserver(function (entries,sectionOneObserver) {
      entries.forEach((entry) => {
          const currentTarget = entry.target.id;
          if(currentTarget === 'c1'){
              const isInterSectiing = entry.isIntersecting;
              if(isInterSectiing){
                  prev.style.display = 'none'
                }else{
                    prev.style.display = 'block'
              }
              
            }
            else if(currentTarget === 'c2'){
            const isInterSectiing = entry.isIntersecting;
            if(!isInterSectiing){
                next.style.display = 'block'
              }else{
                  next.style.display = 'none'
            }
        }

      });
    },
    sectionOneOptions);

    sectionOneObserver.observe(hlcc);
    sectionOneObserver.observe(hlcc2);
  };


  useEffect(() => {
    interSect();
  }, []);
  useEffect(()=>{
      setfecthedData(fetchedInfo.forecast.forecastday)
  },[currentForcast, fetchedInfo])

  console.log(fecthedData);

  function getId(index){
      if(index === 1){
          return 'c1'
      }else if(index === 2){
          return 'c2'
      }
      else{
          return 'd'+index
      }
  }
  const fetcheddata2 = fecthedData[currentForcast].hour;
  console.log(fetcheddata2);


  return (
    <div className="hourlyContainer">
        <button className="next" onClick={() => move("next")}>
        <AiOutlineArrowRight/>
        </button>
        <button className="prev" onClick={() => move("prev")}>
          <AiOutlineArrowLeft/>
        </button>
      <h4>HourlyDetails</h4>
      <div id="line"></div>
      <br />
      <div className="btminfocnt" id="hours">
        <div className="hoursListContainer" ref={scrollHoursBody}>
          <div className="hoursListChildren" id="c1">

              <img src="//cdn.weatherapi.com/weather/64x64/day/302.png" alt="" className="icon" />

              <h3 className="degree">32 <WiDegrees style={{fontSize: '20px'}}/> </h3>
              
              <h3 className="condition">partly cloudy</h3>
              
              <br />

              <p className="humidity"> <BsFillDropletFill style={{fontSize: '0.5rem'}}/> 28%</p>
              <p className="windspeed">21km/h</p>

              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren" id="c2">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          {fetcheddata2.map((item,index)=>{
              const {humidity} = item;
              console.log(item);
          })}
        </div>
      </div>
    </div>
  );
};

export default HourlyDetails;
