#!template index.html

{= LINKS =}
intro-to-blockly:Blockly Introduction
logic:What is logic?
computer:What are Computers?
asteroid:Let's Play a Game!
lemonade:Lemonade Simulation
{==}

{= HEADER =}
<script type="text/javascript">
  {% cat nav.js %}
</script>
{==}

{= CONTENT =}
<center><img src="images/GTC-Logo.png" alt="Our project's logo" /></center>
<div id="text">
  <br />
  <p class="dir">#!/usr/bin/gtc>_ Welcome to Game to Code!</p>
  <p>Game to Code is a project designed to increase understanding of computers
    and computer programmaing through the novel use of computer games.
    We aim to provide a method of learning a subject that many people find difficult to comprehend.
    By creating a familiar environment, people will be much more open of new ideas.
    A simple and elegant user interface provides ease of use and mastery.
  </p>
  <br />
  <p>If you are a first-time user, select the first level in the list below; otherwise you can pick up where you left off.</p>
  <ul>
    {% IFS=$'\n' %}
    {% for link in ${LINKS[@]}; do %}
    <li>
      <a href="{{ $ROOTDIR/${link%:*} }}/index.html">
	{{ ${link#*:} }}
      </a>
    </li>
    {% done %}
  </ul>
  <br />
  <p>If you're browsing this on your local harddrive and wish to view it online, our website is located at <a href="http://game-to-code.us">http://game-to-code.us</a></p>
  <br />
  <p>If you wish to contribute, please visit our <a href="http://github.com/arw12625/Game-to-Code">github repository,</a>
    use this <a href="#" onclick="loadintro('template')">template</a>, or send an email to our <a href="mailto:awintenb@gmail.com?Subject=Possible%20Contributor">developers</a></p>
</div>
{==}
{% include index.tpl %}
