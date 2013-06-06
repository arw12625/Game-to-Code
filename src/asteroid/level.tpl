#!template asteroid/level.html

{= L_TITLE =}
Introduction to Logic
{==}

{= L_DESC =}
<p>&nbsp&nbsp&nbsp&nbsp&nbsp In this exercise you will be tasked with writing the asteroid avoidance
  system for an alien spaceship. The spaceship should not be hit by any asteroids. The spaceship is
  equiped with a sensor that can detect any asteroids in front of the ship. To conserve fuel, the 
  space ship can only move left and right. Remember that the sensor detects asteroids in front and 
  diagonal of the ship. Click Hide below to proceed.</p>
{==}

{% L_DIR=asteroid include level.tpl %}
