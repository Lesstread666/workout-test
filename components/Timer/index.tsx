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
        <div className="flex flex-col items-center">

            <div
                className="flex h-40 w-40 items-center justify-center rounded-full border-4 border-blue-500 text-5xl font-bold text-blue-300
            shadow-[0_0_18px_theme(colors.blue.500)]
            sm:h-48 sm:w-48 sm:text-6xl"
            >
                {remainingSeconds}
            </div>

            {remainingSeconds === 0
                ? (
                    <div className="mt-6 flex flex-col items-center gap-4">
                        <p className="text-2xl font-bold text-green-400">
                            YOU DID IT!
                        </p>

                        <button
                            onClick={resetTimer}
                            className="rounded-lg bg-blue-700 px-6 py-3 text-white transition
                        hover:bg-blue-500
                        hover:shadow-[0_0_12px_theme(colors.blue.500)]">
                            Reset
                        </button>
                    </div>
                )
                : (
                    <button
                        onClick={() => setTimerStarted(true)}
                        className="mt-6 rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition
                    hover:bg-blue-800
                    hover:shadow-[0_0_12px_theme(colors.blue.500)]"
                    >
                        {timerStarted ? "LETS GO" : "Start"}
                    </button>
                )}
        </div>
    )
}

export default Timer