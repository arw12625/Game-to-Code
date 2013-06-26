# L_TITLE=the title of this level
# L_DESC=the description (include p-tags)
# L_DIR=the directory where level.js is stored

{= HEADER =}
<script type="text/javascript">
  {% cat nav.js %}
  {% cat javascript/ExecutionQueue.js %}
  {% cat javascript/ResourceManager.js %}
  {% cat $L_DIR/level.js %}
</script>
{==}

{= CONTENT =}
<div id="container">
  <div id="overlay">
    <h1 class="title">{{ $L_TITLE }}</h1>
    <br />
    {{ $L_DESC }}
    <br />
    <div id="hide"><button onclick="hidehelp()">Hide</button></div>
  </div>
  <div id="filebarwrapper">
    <ul id="filebar">
      <li><a href="#">File</a>
	<ul>
	  <li><a href="#">Load</a></li>
	  <li><a href="#">Save</a></li>
	</ul>
      </li>
      <li><a href="#" onclick="runcode()">Run</a></li>
      <!-- I'm sorry :( -->
      <li><a style="visibility:hidden" id="stop-button" href="#" onclick="stopcode()">Stop</a></li>
      <li><a href="#" onclick="showhelp()">Help</a></li>
      <li><a href="#" onclick="loadhome()">Home</a></li>
    </ul>
  </div>
  <script>
    function blocklyLoaded(blockly) {
    // Called once Blockly is fully loaded.
    window.Blockly = blockly;
    }
  </script>
  <table width="100%" height="100%">
    <tr>
      <td width="500">
	<canvas id="canvas" width="500" height="580"></canvas>
      </td>
      <td>
	<iframe id="code" src="frame.html"></iframe>
      </td>
    </tr>
  </table>
</div>
{==}

{% include index.tpl %}
