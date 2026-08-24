import { useState, useEffect } from "react"

type TimerProps = {
    startTime: number
}

const Timer = ({ startTime }: TimerProps) => {
    //useState to control if timer started
    const [timerStarted, setTimerStarted] = useState(false)

    //useState to store the current number of seconds left 
    // value comes from startTime prop
    const [remainingSeconds, setRemainingSeconds] = useState(startTime)

    useEffect(() => {
        //don't create interval if timer not started or seconds has reached 0
        if (!timerStarted || remainingSeconds === 0) return

        //runs interval each 1 sec and decrease the time by 1
        const interval = setInterval(() => {
            setRemainingSeconds(
                (previousSeconds) => previousSeconds - 1
            )
        }, 1000)

        //cleans up current interval before useEffect runs again
        return () => clearInterval(interval)
    }, [timerStarted, remainingSeconds])

    //reset the timer to original number and stops the timer
    const resetTimer = () => {
        setRemainingSeconds(startTime)
        setTimerStarted(false)
    }

    return (
        <div>
            <div>{remainingSeconds}</div>

            {remainingSeconds === 0
                ? (
                    <div>
                        <p>YOU DID IT!</p>

                        <button onClick={resetTimer}>
                            Reset
                        </button>
                    </div>
                )
                : (
                    <button onClick={() => setTimerStarted(true)}>
                        {timerStarted ? "LETS GO" : "Start"}
                    </button>
                )}
        </div>
    )
}

export default Timer