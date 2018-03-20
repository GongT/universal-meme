#!/usr/bin/env bash
export PROJECT_ROOT="$(dirname "$(dirname "$(realpath "${BASH_SOURCE[0]}")")")"

function create-nginx-config() {
	create-nginx-log "${OUTPUT_TYPE-normal}" "$1" \
		> "${PROJECT_ROOT}/assets/nginx/log/${OUTPUT_TYPE-normal}.conf"
	
	cat "${PROJECT_ROOT}/assets/nginx/conf.d/default.conf.template" \
		| sed "s#\${PROJECT_ROOT}#${PROJECT_ROOT}#" \
		| sed "s#\${OUTPUT_TYPE}#${OUTPUT_TYPE-normal}#" \
		| sed "s#\${LISTEN_PORT}#${LISTEN_PORT-23333}#" \
		> "${PROJECT_ROOT}/assets/nginx/conf.d/default.conf"
	
	echo "nginx will listen on port: ${LISTEN_PORT-23333}" >&2
}

function create-nginx-log() {
	case "$1" in
	debug)
		echo "access_log ${2} main;
error_log stderr info;"
	;;
	normal)
		echo "access_log ${2} tiny;
error_log stderr warn;"
	;;
	esac
}
