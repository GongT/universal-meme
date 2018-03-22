#!/usr/bin/env bash

set -e

echo "一、编译TypeScript"
tsc -p src

echo "二、生成css"
node-sass-chokidar \
--recursive \
--source-map-contents \
--output-style nested \
--indent-type tab \
--source-map docs/css \
--output docs/css \
styles

echo "三、生成index.html"
cat 'assets/index.dynamic.html' \
	| sed '/\[\[dynamic part/,/dynamic part\]\]/c\\t<script type="text/javascript" src="build.js"></script>' \
	> docs/index.html

echo "四、构建js项目"
jspm build dist/scripts/index.js docs/build.js --no-mangle --format umd
