'use client'

import { useState } from "react";
import Header from "@/components/Header";
import WorkoutSelection from "@/components/WorkoutSelection";
import ActiveWorkout from "@/components/ActiveWorkout";
import { Workout } from "@/types/workout";

export default function Home() {
  //useState to store either user choose workout or nothing selected (null  )
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null)

  //chosen workout will display info of selected workout
  const handleClick = (workout: Workout) => { setSelectedWorkout(workout) }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <Header />

        {/* if user select workout -> display Active workout with its data and Go Back button to WorkoutSelection */}
        {selectedWorkout ? (
          <ActiveWorkout
            workout={selectedWorkout}
            goBack={() => { setSelectedWorkout(null) }} />
        ) :
          // else if nothing selected we display all workout cards
          (
            <WorkoutSelection handleClick={handleClick} />
          )}

      </div>
    </main>

  )
}
