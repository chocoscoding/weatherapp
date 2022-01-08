import React, { useEffect, useRef} from "react";
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
function getFinalTime(time){
    let arr1 =time.split('');
    let count = arr1.length -5;
    arr1.splice(0, count);
    return arr1.join('').toString();
}
const HourlyDetails = ({fetchedInfo, currentForcast, degree}) => {
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

  function getId(index){
      if(index === 0){
          return 'c1'
      }else if(index === 23){
          return 'c2'
      }
      else{
          return 'd'+index
      }
  }
  const fetcheddata2 = fetchedInfo.forecast.forecastday[currentForcast];


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
          {fetcheddata2.hour.map((item,index)=>{
              const {humidity, temp_f, temp_c, wind_kph, time} = item;
              const {icon, text} = item.condition;
                getFinalTime(time)
                getId(index)

                return (
                    <div className="hoursListChildren" key={index} id={`${getId(index)}`}>

              <img src={icon} alt={text} className="icon" />

              <h3 className="degree">{degree ? temp_f: temp_c} <WiDegrees style={{fontSize: '20px'}}/> </h3>
              
              <h3 className="condition">{text}</h3>
              
              <br />

              <p className="humidity"> <BsFillDropletFill style={{fontSize: '0.5rem'}}/> {humidity}%</p>
              <p className="windspeed">{wind_kph}km/h</p>

              <div className="bottomTime">
                  {getFinalTime(time)}
              </div>
          </div>
                )

          })}
          {}
        </div>
      </div>
    </div>
  );
};

export default HourlyDetails;
