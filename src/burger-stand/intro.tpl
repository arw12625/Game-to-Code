.#!template newtemplate/index.html
# ^ the above line would not have a . in front 
#+ of it if you were actually making a new level
#+ (delete these lines, too, for good measure)
#REPLACE: newtemplate with <yourlevedir>
#+ this is the location it will output your new file.


#REPLACE: Title of your lesson
{= L_TITLE =}
Lesson title about programming
{==}

#REPLACE: Lesson content
{= CONTENT =}
<div id="text">
  <br />
  <img src="images/flowchart.png" alt="Picture of a flow chart" width="240" height="260" class="par_image"/>
  <p>Most simply, it is the valid use of reasoning.</p>
  <br />
  <p>How does this have anything to do with computers or programming?</p>
  <br />
  <p>Logic is at the core of the computer. It is the way we organize data and control what happens within the CPU.
    We are all very familiar with logic even if we do not know it. Everyone has seen a flowchart at some point in time.
    They are one way to visualize and understand logic. We begin by following the arrow from the start until we reach
    a yes or no question. This question is known in logic as a condition such as "Is the sink working?" or "Is it time
    to get up?". Then based off of the answer to this question, we follow the correct arrow. This is called a decision
    and together with the condition make a conditional statement such as "If it is raining, then get an umbrella. Else if it
    is not raining, then get some sunscreen." Notice the form of the conditional statement: if [condition] then [statement].
    It is from this form that the simplest computer programming structure is derived: the if statement. This is our first
    control structure with which we can program the computer. It allows the computer to make decisions instead of just 
    following instructions.</p>
  <br />
  <p>How does this work?</p>
  <br />
  <p>Let's write our first program to answer that question.</p>
  <br />
</div>
{==}

{% include intro.tpl %}
