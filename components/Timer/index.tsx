import { useState, useEffect } from "react"

type TimerProps = {
    startTime: number
}

const Timer = ({ startTime }: TimerProps) => {
    const [timerStarted, setTimerStarted] = useState(false)
    const [remainingSeconds, setRemainingSeconds] = useState(startTime)

    useEffect(() => {
        if (!timerStarted || remainingSeconds === 0) return

        const interval = setInterval(() => {
            setRemainingSeconds(
                (previousSeconds) => previousSeconds - 1
            )
        }, 1000)

        return () => clearInterval(interval)
    }, [timerStarted, remainingSeconds])


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