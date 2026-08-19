import { Workout } from "@/types/workout"

type WorkoutCardProps = {
    workout: Workout
    handleClick: (workout: Workout) => void
}

const WorkoutCard = ({ workout, handleClick }: WorkoutCardProps) => {
    return (
        <div data-testid="workout-card"
            className="border rounded-lg p-4">

            <h3 className="text-xl font-semibold">
                {workout.name}
            </h3>

            <div data-testid="workout-time"
                className="mt-2">
                Work time: {workout.workTime} seconds
            </div>

            <button onClick={() => handleClick(workout)}
                className="mt-4 px-4 py-2 border rounded">
                Start Workout
            </button>
        </div>
    )
}

export default WorkoutCard