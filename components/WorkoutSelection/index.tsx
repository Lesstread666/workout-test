import { Workout } from "@/types/workout"
import { workouts } from "@/data/workouts"
import WorkoutCard from "../WorkoutCard"

type WorkSelectionProps = {
    handleClick: (workout: Workout) => void
}

const WorkoutSelection = ({ handleClick }: WorkSelectionProps) => {
    return (
        <div data-testid="workout-selection"
            className="max-w-5xl mx-auto p-6">

            <h2 className="text-2xl font-bold text-center mb-6">
                Choose your workout
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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