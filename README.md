# Proposal:



## Workout timer

On homepage, choose between workouts. 
When clicked "start workout" the workout shows (activeWorkout) with a timer. 
click start to start the countdown timer.

When started, the button changes text to "lets go"!

When workout is completed, timer is 0 and a text with "you did it" shows up, and a reset button. 

Click the reset button to go back to initial timer countdown. Click start to do the workout again again. 

Click the "go back" button to go back to the homepage, with all the workout selections. 


![homepage](public/images/home.png)
---
![timer](public/images/counting.png)
---
![started counting](public/images/timer.png)
---
![timer ends](public/images/victory.png)


## Test Improvements

The provided tests covered the main functionality well, but some areas could be improved.

The WorkoutSelection tests only verify that the first workout card contains the correct workout name. A stronger test could check that all six workout cards display the correct data from the workouts array.

The Home integration tests only select the first workout. An additional test could select another workout and verify that the correct workout name and timer value are shown in ActiveWorkout.

Some tests use data-testid where accessible queries such as getByRole or getByText could be used instead.

Responsive styling and visual appearance are not covered by the automated tests, so these were checked manually in the browser.

## Additional Tests

No additional tests were required to complete the application, as all provided tests covered the main required functionality.