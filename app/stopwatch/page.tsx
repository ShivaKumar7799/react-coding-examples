"use client"
import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [time, set_time] = useState(59340);
    const [is_active, set_is_active] = useState(false)
    useEffect(() => {
        let interval: any = null;
        if (is_active) {
            interval = setInterval(() => {
                set_time(time => time + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [is_active])
    const handleForamtTime = (time: number) => {
        if (time < 10) {
            return "0" + time
        } else {
            return time
        }
    }
    const milliseconds = handleForamtTime((time / 10 % 100));
    const seconds = handleForamtTime((Math.floor(time / 1000) % 60));
    const minutes = handleForamtTime((Math.floor(time / (1000 * 60)) % 60));
    return (
        <div>
            <p>Stopwatch</p>
            <p> {minutes} : {seconds}:  {milliseconds}</p>
            <button onClick={() => set_is_active(true)} >Start</button>
            <button onClick={() => set_is_active(false)} >Stop</button>
        </div>
    )
}

export default Stopwatch
