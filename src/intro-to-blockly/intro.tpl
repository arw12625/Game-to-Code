#!template intro-to-blockly/index.html
# ^ the above line would not have a . in front 
#+ of it if you were actually making a new level
#+ (delete these lines, too, for good measure)


{= L_TITLE =}
Introduction to Blockly
{==}

{= NUM_BLOCKS =}
two
{==}

{= CONTENT =}
<img src="images/blockly-logo.png" alt="blockly's logo" class="par_image"/>
<p>With the knowledge that many people feel intimidated by textual programming languages, this project went another route.  We use, here, a graphical drag-and-drop language called Blockly, which was created for use by kids, parents, and teachers.  The Blockly mindset is one where typing isn't required, and where you write the code once, and can run it in various textual languages like JavaScript or Python (you shouldn't worry if you've never heard of these languages).  In this set of tutorials, we use the JavaScript backend which allows the code to run in the browser, however we won't be going over the specifics of JavaScript, just the Blockly language.</p>
<p>There are {{ $NUM_BLOCKS }} main types of blocks in Blockly: </p>
<ul>
  <li><p>"action" blocks: (these are the ones that actually <i>do</i> something)</p></li>
  <li><p>"question" blocks: (these ask a question about the environment, "is it raining?", "is there anything in front of me?")</p></li>
  <li><p>"control" blocks (these choose an action to do based on a question)</p></li>
</ul>
<img src="images/blocks-stacked-together.png" alt="several blockly block stacked together" class="par_image"/>
<p>The ones shown in this picture are "action" blocks because these have an effect on the outcome of the program.  The "Clear Field" block actually <i>clears</i> the field, likewise with the rest of the blocks.  One thing the image shows is how blocks look when they're stacked together.  You do this by dragging one block onto the bottom of the other (for instance, you would drag the Clear Field block to touch the bottom of the Water Field block).  Once they're connected, you can drag the top one and the bottom will follow (In this case, dragging the Water Field block will move it and the Clear Field one).  To remove two blocks, drag the bottom one away from the top one.  Notice, with these, that there is a divot in the top, and a tab on the bottom.  This means that it can connect to another block with a tab matching its divot, and that other blocks of that type can connect below it.</p>
<img src="images/dropdown.png" alt="action block with a dropdown" class="par_image" />
<p>Some blocks have a dropdown list to specify what action to take.  For example, with this image, instead of having two separate blocks (Block Left and Block Right), there's only the one Block Left/Right.  To activate the dropdown, just click on the light green area, then select your choice and the menu will go away.  If you accidentally clicked on one, you can click anywhere off the block to close it.</p>
<img src="images/is-blocking.png" alt="a question block" class="par_image" />
<p>The next block type is the "question" block, which gives you information about the environment.  With this block (which came from the first level), it is simply asking whether the opponent boxer "is blocking [on the] left [side]".  This one also has a dropdown menu to choose which side it is asking about.  With these, it's important to notice the shape of the block on the left.  The puzzle-piece shaped tab fits into a similarly shaped hole in another block (usually a "control" block, though there are others that match it).</p>

<br>
{==}

{% include intro.tpl %}
