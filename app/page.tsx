'use client'

import Header from "@/components/Header";
import WorkoutCard from "@/components/WorkoutCard";
import WorkoutSelection from "@/components/WorkoutSelection";
import { workouts } from "@/data/workouts";

export default function Home() {

  const handleClick = () => { }

  return (
    <div>
      <Header />

      <WorkoutSelection handleClick={handleClick} />
    </div>
  )
}
