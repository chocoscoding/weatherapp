import React, { useEffect, useRef } from "react";

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
const HourlyDetails = () => {
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



  return (
    <div className="hourlyContainer">
        <button className="next" onClick={() => move("next")}>
          B
        </button>
        <button className="prev" onClick={() => move("prev")}>
          N
        </button>
      HourlyDetails
      <div id="line"></div>
      <br />
      <div className="btminfocnt" id="hours">
        <div className="hoursListContainer" ref={scrollHoursBody}>
          <div className="hoursListChildren" id="c1">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren" >
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren" >
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren" >
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren" >
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren" >
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
          <div className="hoursListChildren" id="c2">
              <div className="bottomTime">
                  10pm
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyDetails;
