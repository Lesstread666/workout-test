import { Workout } from "@/types/workout";
import Timer from "../Timer";

type ActiveWorkoutProps = {
    workout: Workout,
    goBack: () => void
}

const ActiveWorkout = ({ workout, goBack }: ActiveWorkoutProps) => {
    return (
        <div>
            <h2>{workout.name}</h2>

            <Timer startTime={workout.workTime} />

            <button onClick={goBack}>
                Go Back
            </button>
        </div>
    )
}

export default ActiveWorkout
