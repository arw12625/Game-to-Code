#!template asteroid/index.html

{= L_TITLE =}
Let's Play a Game!
{==}

{= CONTENT =}
<br />
<p>One of the many uses of programming includes interacting with a system in realtime. Many tasks require
  this from something as complex as controlling a robot diffusing a bomb to controlling a fan based on the
  room temperature. Many systems are extremely complex so we will not analyze them here but with our knowledge
  of logic and conditional statements, we aim to control a simpler system.</p>
<p>In particular, we will control a spaceship moving through the asteroid belt as it attempts to not be hit by asteroids.  The spaceship only has a few sensors at its disposal: it is able to see forward and measure how far away it is from the next asteroid.  It is also able to tell if there's an asteroid forward and to the left and right.</p>
<p>Using only these sensors, there is a limit to how well the ship can avoid asteroids.  For instance, without the ability to see asteroids beyond the ones immediately in front of it (i.e. seeing the asteroid behind the first, and being able to find the distance between them), the ship may get caught in a position where it gets trapped and destroyed.</p>
<br />
{==}

{% include intro.tpl %}
