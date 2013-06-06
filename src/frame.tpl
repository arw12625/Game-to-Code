{= SRC =}
/game-to-code
{==}

{= HEADER =}
<meta charset="utf-8">
<script type="text/javascript" src="{{$SRC}}/blockly/trunk/demos/blockly_compressed.js"></script>
<script type="text/javascript" src="{{$SRC}}/blockly/trunk/generators/javascript.js"></script>
<script type="text/javascript" src="{{$SRC}}/blockly/trunk/generators/javascript/gtc.js"></script>

<script type="text/javascript" src="{{$SRC}}/blockly/trunk/language/en/_messages.js"></script>
<script>
  function init() {
  Blockly.inject(document.body, {path: 'blockly/trunk/'});
  // Let the top-level application know that Blockly is ready.
  window.parent.blocklyLoaded(Blockly);
  }
</script>
<style>
  html, body {
  background-color: #fff;
  margin: 0;
  padding:0;
  overflow: hidden;
  }
  .blocklySvg {
  height: 100%;
  width: 100%;
  }
</style>
{==}

{= ONLOAD =}
init()
{==}

{% include index.tpl %}
