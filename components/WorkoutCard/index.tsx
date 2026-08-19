import { Workout } from "@/types/workout"

type WorkoutCardProps = {
    workout: Workout
    handleClick: (workout: Workout) => void
}

const WorkoutCard = ({ workout, handleClick }: WorkoutCardProps) => {
    return (
        <div data-testid="workout-card">
        </div>
    )
}

export default WorkoutCard