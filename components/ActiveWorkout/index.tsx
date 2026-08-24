import { Workout } from "@/types/workout";
import Timer from "../Timer";

type ActiveWorkoutProps = {
    workout: Workout,
    goBack: () => void
}

const ActiveWorkout = ({ workout, goBack }: ActiveWorkoutProps) => {
    return (
        <div className="flex flex-col items-center px-4 text-center">
            <h2 className="mb-8 text-2xl font-semibold text-blue-300 sm:text-3xl">
                {workout.name}
            </h2>

            <Timer startTime={workout.workTime} />

            <button
                onClick={goBack}
                className="mt-10 rounded-lg border border-blue-950 px-6 py-3 text-blue-300 transition hover:bg-blue-900 hover:text-white hover:shadow-[0_0_12px_theme(colors.blue.500)]">
                Go Back
            </button>
        </div>
    )
}

export default ActiveWorkout
