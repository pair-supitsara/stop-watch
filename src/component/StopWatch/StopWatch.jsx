import Button from '../Button/Button.jsx';
import React, { useState, useRef } from 'react';

function StopWatch() {
    const [time, setTime] = useState(0);
    const [history, setHistory] = useState([]);
    const intervalRef = useRef();

    const fnStart = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => 
                prevTime + 1);
            }
        , 1000);
    };

    const fnStop = () => {
        setHistory([...history, {
            date: new Date(),
            record: formateSeconds(time)
        }]);
        clearInterval(intervalRef.current);
    };

    const fnReset = () => {
        clearInterval(intervalRef.current);
        setTime(0);
    };
    
    function formateSeconds(second) {
        let min = '0' + Math.floor(second/60)
        min = min.substring(min.length-2, min.length)
        let sec = '0' + second%60
        sec = sec.substring(sec.length-2, sec.length)
        return min +':'+ sec
    }

  return (
    <div className="">
        <div className="Time">{formateSeconds(time)}</div>
        <div>
            {time === 0 && <Button color='green' text='start' action={fnStart} />}
            {time !== 0 && <Button color='red' text='stop' action={fnStop} />}
            <Button color='grey' text='reset' action={fnReset}/>
        </div>
        <div className='history'>
            <ul>
                {history.map((item) => (<li>{item.record}</li>))}
            </ul>
        </div>
    </div>
  );
}

export default StopWatch;
