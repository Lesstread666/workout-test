import { Workout } from "@/types/workout"
import { workouts } from "@/data/workouts"
import WorkoutCard from "../WorkoutCard"

type WorkSelectionProps = {
    handleClick: (workout: Workout) => void
}

const WorkoutSelection = ({ handleClick }: WorkSelectionProps) => {
    return (
        <div data-testid="workout-selection"
            className="mx-auto w-full max-w-6xl">

            <h2 className="mb-8 text-center text-2xl font-semibold text-blue-200 sm:text-3xl">
                Choose your workout
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {workouts.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                        handleClick={handleClick}
                    />
                ))}
            </div>

        </div>
    )
}

export default WorkoutSelection