import React from "react";

const DaysList = () => {
    const showCurrent = (tgt)=>{
        const allElement = document.querySelectorAll('.daysListChildren');
        allElement.forEach((item)=>{
            item.className = 'daysListChildren'
        })
        if(tgt.id === 'daysMinInfo'){
            const element = tgt.parentElement.classList;
            element.toggle('daysActive')
        }
        else{
            tgt.classList.toggle('daysActive')
        }

    }
  return (
    <div className="btminfocnt">
      <div className="daysListContainer">
        <div className="daysListChildren daysActive" key={1} onClick={(e)=> showCurrent(e.target)}>
            <p id="daysMinInfo">flsdnkc</p>
            {/* <div>flslcns</div>
            <h3>csdklcdksnc</h3>
            DaysList */}
            </div>
        <div className="daysListChildren" onClick={(e)=> showCurrent(e.target)}>DaysList</div>
        <div className="daysListChildren" onClick={(e)=> showCurrent(e.target)}>DaysList</div>
        <div className="daysListChildren" onClick={(e)=> showCurrent(e.target)}>DaysList</div>
        <div className="daysListChildren" onClick={(e)=> showCurrent(e.target)}>DaysList</div>
      </div>
    </div>
  );
};

export default DaysList;
