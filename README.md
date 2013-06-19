Game-to-Code
============

Brief Summary

Game to Code is a project designed to increase understanding of computers and computer programming through the novel use of computer games.

This game was designed by Farragut High School TSA, to ease the difficulty of learning programming. The game goes step by step to teach the parts, data structure, and sequences that a computer goes through to process information.

Licensing

**TODO**

Bugs

The blockly libraries will not work in Chrome. The failure of chrome to work is a bug due to the security that chrome has built in that does not allow direct loading of trees.

The blockly libaries will not work in Internet Explorer 1-9 due to the lack of HTML 5 compliance.(Tested as of 3/14/2013)

## Instructions to get started

    git clone https://github.com/arw12625/Game-to-Code.git
    cd Game-to-Code
    git submodule init
    git submodule update
    source oss install
    oss compile             # See note 1
    # open output/index.html in a browser, for example:
    firefox output/index.html
