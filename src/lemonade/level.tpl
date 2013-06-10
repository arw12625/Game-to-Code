.#!template newtemplate/level.html
# ^ the above line would not have a . in front 
#+ of it if you were actually making a new level
#+ (delete these lines, too, for good measure)
#REPLACE: newtemplate/level.html with <yourlevedir>/level.html
#+ this is the location it will output your new file.

#REPLACE: the title of your level
{= L_TITLE =}
An example title!
{==}

#REPLACE: Short description of the actual level (not 
#+ the introduction to the concept) 
{= L_DESC =}
<p>&nbsp&nbsp&nbsp&nbsp&nbsp blah blah, you will use blocks and make stuff do things, weeeeee</p>
{==}

#REPLACE: newtemplate -> the level's directory
{% L_DIR=newtemplate include level.tpl %}
