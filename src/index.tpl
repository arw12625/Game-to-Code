# HEADER=Things to go in the `head`
# CONTENT=stuff to display
# ONLOAD=sets the onload method of `body`

<html>
  <head>
    <title>Game to Code</title>
    <style type="text/css">
      {% cat style.css %}
      {% cat terminal.css %}
      {% cat runtime.css %}
    </style>
    {{ $HEADER }}
  </head>
  <body
     {% if [[ -n $ONLOAD ]]; then %}
     onload="{{ $ONLOAD }}"
     {% fi %}
     >
    {{ $CONTENT }}
    <div style="display: none" id="message_box">
      <div id="message_message"></div>
      <button id="level_button" onclick="hideMessage()">Close</button>
    </div>
  </body>
</html>
