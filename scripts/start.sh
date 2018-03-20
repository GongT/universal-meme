#!/usr/bin/env bash

export OUTPUT_TYPE=debug
source scripts/lib.sh

SASS_COMMAND=$(echo "
node-sass
--watch
--recursive
--output dist/css
--source-map
--source-map-contents
--output-style nested
--indent-type tab
styles
")

if [ ! -e output.fifo ]; then
	mkfifo output.fifo
fi

cp assets/index.dynamic.html dist/index.html

create-nginx-config "${PROJECT_ROOT}/output.fifo"

concurrently --kill-others \
	--names "typescript,sass,nginx,nginx" \
	--prefix-colors "red,magenta,cyan,cyan.dim" \
	"tsc -w -p src" \
	"$SASS_COMMAND" \
	"nginx -c '${PROJECT_ROOT}/assets/nginx/nginx.conf'" \
	"while true ; do cat output.fifo ; done"


true
