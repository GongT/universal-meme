#!/usr/bin/env bash

if pwd | grep -q 'node_modules' ; then
	exit 0
fi

mkdir -p tmp

#if [ ! -e "CDN" ]; then
#	cat assets/library-url/cdn.sh > CDN
#fi

bash -c '{ sleep 2; rm package-lock.json; }&'


exit 0
