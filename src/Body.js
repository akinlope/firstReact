import { useEffect, useState } from "react";

const Body = () => {
    const [date, setDate] = useState()
    const [time, setTime] = useState()

    useEffect(()=> {
        setInterval(() => {
            const date = new Date()
            setTime(date.toLocaleTimeString());
            setDate(date.toDateString());
        }, 1000);
    }, [])

    return ( 
        <div className="time-body">
            <p>The current time and date is</p>
            <div className="time">
            <h1>{time}</h1>
            </div>
            <div className="date">
                <h3>{date}</h3>
            </div>
        </div>
     );
}
export default Body;
