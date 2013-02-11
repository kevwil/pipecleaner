#!/bin/sh

echo "info: this is a single line test" | node index.js
echo "begin test\ntest running ...\nwarning this shouldn't happen\nsuccess!" | node index.js
echo "foo\nbar\nbaz" | node index.js
echo "enemies approaching\nerror 'danger will robinson, danger!'" | node index.js
echo "ignore this line\nand also this one\nerror! this last line should be valid output." | node index.js
