'use client'

import Header from "@/components/Header";
import WorkoutCard from "@/components/WorkoutCard";
import { workouts } from "@/data/workouts";

export default function Home() {

  const handleClick = () => { }

  return (
    <div>
      <Header />

      <WorkoutCard
        workout={workouts[0]}
        handleClick={handleClick}
      />
    </div>
  )
}
