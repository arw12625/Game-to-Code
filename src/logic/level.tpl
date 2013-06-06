#!template logic/level.html

{= L_DIR =}
logic
{==}

{= L_TITLE =}
Introduction to Logic
{==}

{= L_DESC =}
<p>&nbsp&nbsp&nbsp&nbsp&nbsp In this exercise we will analyze the use logic by mimicing the actions of a boxer in the ring.
  Just like in a real match, you must anticipate your opponent's moves and respond to them correctly.
  This is the time to use the if statement: if the oppenent moves a certain way, then counter with
  the appropriate action. On the left you will see your opponent and on the right you will see an empty
  square. This is your workspace. Navigate the menus to find the appropriate commands to create a
  fighting scheme. Drag and drop the components into the correct position to connect them. To change a
  value click on the text, for example if you wish to change "punch right" to "punch left", just click
  on "left". Remember, to acheive the maximum score, account for all posible situations.
  When you feel you are ready, press the run button to run your code. You can save your work under file
  and bring this text back up with the help button. Click Hide below to proceed.</p>
{==}

{% L_DIR=$L_DIR include level.tpl %}
