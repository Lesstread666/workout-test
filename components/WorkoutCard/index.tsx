import { Workout } from "@/types/workout"

type WorkoutCardProps = {
    workout: Workout
    handleClick: (workout: Workout) => void
}

const WorkoutCard = ({ workout, handleClick }: WorkoutCardProps) => {
    return (
        <div data-testid="workout-card"
            className="rounded-xl border border-blue-700 bg-slate-950 p-6 cursor-pointer text-center
               shadow-[0_0_10px_theme(colors.blue.700)]
               transition
               hover:border-blue-400
               hover:shadow-[0_0_18px_theme(colors.blue.500)]">

            <h3 className="text-xl font-semibold text-blue-300">
                {workout.name}
            </h3>

            <div data-testid="workout-time"
                className="mt-4 text-slate-300">
                Work time: {workout.workTime} seconds
            </div>

            <button onClick={() => handleClick(workout)}
                className="mt-6 w-full rounded-lg bg-blue-950 px-4 py-3 cursor-pointer text-white transition hover:bg-blue-900 hover:shadow-lg">
                Start Workout
            </button>
        </div>
    )
}

export default WorkoutCard