#!template lemonade/index.html

{= L_TITLE =}
Running a Simulation
{==}

{= CONTENT =}
<br />
<p>One of the most valuable things someone can do with a computer is to run a simulation of the real world.  This is useful to people wanting to generalize a certain behavior, without having to run many expensive and time-consuming tests with real people.  The programmer can simply create a few rules that the people will follow and run it thousands of times with different starting parameters and see what happens in the end.</p>
<p>Another use of simulation is to generate the best algorithm/method to complete a task.  For example, someone may want the optimal strategy to play Mario with, so the programmer could implement a few algorithms and compare their score values to determine which one was the best.  Or maybe someone could want to find the best way to drive a car autonomously, but doing real world tests would be too costly.  In this case there are several ways they could set up the simulation: if the car will be using just a regular camera, maybe Google Maps Street View data could be used, or if it only has access to ultrasonic sensors to find the distance to the sides of the road, a full computer model could be used.</p>
<p>In this game, we will be simulating a simple lemonade stand, where you must find the best relationship between the uncontrollable temperature, humidity, weather and the amount of sugar and ice.  Of course, there's not one best strategy for this, and moreover, one strategy might work exceptionally the first time and not well the second due to some randomness involved.</p>
<p>To implement your algorithm, it will be useful to know about a different programming idea than you have previously used.  That idea is something we call a "variable".  These are like (and in fact, directly correspond) to the variables you use in Algebra.  Variables are used for pieces of data that change throughout the execution of the program.  For example, if you wanted to count from 1 to 10, you could simply have 10 different Print commands for each of the numbers, but what about if you wanted to print from 1 to 11?  You could add one If statement to the end, and your next Print command.  But now we want to print 1 to 100, are you still going to put all of those Print commands?</p>
<p>Instead, you could simply use a variable, maybe "MaxLoopValue" to denote how how you want to count, and then use another variable, maybe "CurrentLoopValue", which starts at 1 and gets used over and over, and incremented each time until it exceeds MaxLoopValue.  This is the difference between inefficient code and code which the computer can run much more efficiently.  In this case, the addition of the loop variable makes the CPU do more work than the programmer had to do, which is, ultimately, the goal.</p>
<p>With this in mind, when programming for this game, you might want to think about using ...</p>
{==}

{% include intro.tpl %}
