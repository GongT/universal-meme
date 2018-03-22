SystemJS.config({
	paths: {
		'baseURL': '/',
		'application': 'scripts/'
	},
	browserConfig: {
		'paths': {
			'npm:': 'jspm_packages/npm/',
			'github:': 'jspm_packages/github/',
			'application/': 'scripts/'
		}
	},
	nodeConfig: {
		'paths': {
			'npm:': 'dist/jspm_packages/npm/',
			'github:': 'dist/jspm_packages/github/',
			'application/': 'dist/scripts/'
		}
	},
	packages: {
		'application': {
			'main': 'index.js'
		}
	}
});

SystemJS.config({
	packageConfigPaths: [
		'npm:@*/*.json',
		'npm:*.json',
		'github:*/*.json'
	],
	map: {
		'assert': 'npm:jspm-nodelibs-assert@0.2.1',
		'buffer': 'npm:jspm-nodelibs-buffer@0.2.3',
		'child_process': 'npm:jspm-nodelibs-child_process@0.2.1',
		'constants': 'npm:jspm-nodelibs-constants@0.2.1',
		'crypto': 'npm:jspm-nodelibs-crypto@0.2.1',
		'domain': 'npm:jspm-nodelibs-domain@0.2.1',
		'events': 'npm:jspm-nodelibs-events@0.2.0',
		'fs': 'npm:jspm-nodelibs-fs@0.2.1',
		'http': 'npm:jspm-nodelibs-http@0.2.0',
		'https': 'npm:jspm-nodelibs-https@0.2.2',
		'jquery': 'npm:jquery@3.3.1',
		'os': 'npm:jspm-nodelibs-os@0.2.2',
		'path': 'npm:jspm-nodelibs-path@0.2.3',
		'process': 'npm:jspm-nodelibs-process@0.2.1',
		'react': 'npm:react@16.2.0',
		'react-dom': 'npm:react-dom@16.2.0',
		'stream': 'npm:jspm-nodelibs-stream@0.2.1',
		'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.2',
		'url': 'npm:jspm-nodelibs-url@0.2.1',
		'util': 'npm:jspm-nodelibs-util@0.2.2',
		'vm': 'npm:jspm-nodelibs-vm@0.2.1',
		'zlib': 'npm:jspm-nodelibs-zlib@0.2.3'
	},
	packages: {
		'npm:react@16.2.0': {
			'map': {
				'loose-envify': 'npm:loose-envify@1.3.1',
				'object-assign': 'npm:object-assign@4.1.1',
				'prop-types': 'npm:prop-types@15.6.1',
				'fbjs': 'npm:fbjs@0.8.16'
			}
		},
		'npm:prop-types@15.6.1': {
			'map': {
				'fbjs': 'npm:fbjs@0.8.16',
				'loose-envify': 'npm:loose-envify@1.3.1',
				'object-assign': 'npm:object-assign@4.1.1'
			}
		},
		'npm:fbjs@0.8.16': {
			'map': {
				'loose-envify': 'npm:loose-envify@1.3.1',
				'object-assign': 'npm:object-assign@4.1.1',
				'core-js': 'npm:core-js@1.2.7',
				'setimmediate': 'npm:setimmediate@1.0.5',
				'promise': 'npm:promise@7.3.1',
				'isomorphic-fetch': 'npm:isomorphic-fetch@2.2.1',
				'ua-parser-js': 'npm:ua-parser-js@0.7.17'
			}
		},
		'npm:loose-envify@1.3.1': {
			'map': {
				'js-tokens': 'npm:js-tokens@3.0.2'
			}
		},
		'npm:promise@7.3.1': {
			'map': {
				'asap': 'npm:asap@2.0.6'
			}
		},
		'npm:jspm-nodelibs-stream@0.2.1': {
			'map': {
				'stream-browserify': 'npm:stream-browserify@2.0.1'
			}
		},
		'npm:isomorphic-fetch@2.2.1': {
			'map': {
				'whatwg-fetch': 'npm:whatwg-fetch@2.0.3',
				'node-fetch': 'npm:node-fetch@1.7.3'
			}
		},
		'npm:stream-browserify@2.0.1': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'readable-stream': 'npm:readable-stream@2.3.5'
			}
		},
		'npm:readable-stream@2.3.5': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'core-util-is': 'npm:core-util-is@1.0.2',
				'string_decoder': 'npm:string_decoder@1.0.3',
				'safe-buffer': 'npm:safe-buffer@5.1.1',
				'process-nextick-args': 'npm:process-nextick-args@2.0.0',
				'util-deprecate': 'npm:util-deprecate@1.0.2',
				'isarray': 'npm:isarray@1.0.0'
			}
		},
		'npm:string_decoder@1.0.3': {
			'map': {
				'safe-buffer': 'npm:safe-buffer@5.1.1'
			}
		},
		'npm:jspm-nodelibs-domain@0.2.1': {
			'map': {
				'domain-browser': 'npm:domain-browser@1.2.0'
			}
		},
		'npm:jspm-nodelibs-buffer@0.2.3': {
			'map': {
				'buffer': 'npm:buffer@5.1.0'
			}
		},
		'npm:node-fetch@1.7.3': {
			'map': {
				'encoding': 'npm:encoding@0.1.12',
				'is-stream': 'npm:is-stream@1.1.0'
			}
		},
		'npm:buffer@5.1.0': {
			'map': {
				'base64-js': 'npm:base64-js@1.2.3',
				'ieee754': 'npm:ieee754@1.1.10'
			}
		},
		'npm:jspm-nodelibs-url@0.2.1': {
			'map': {
				'url': 'npm:url@0.11.0'
			}
		},
		'npm:jspm-nodelibs-http@0.2.0': {
			'map': {
				'http-browserify': 'npm:stream-http@2.8.1'
			}
		},
		'npm:encoding@0.1.12': {
			'map': {
				'iconv-lite': 'npm:iconv-lite@0.4.19'
			}
		},
		'npm:stream-http@2.8.1': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'readable-stream': 'npm:readable-stream@2.3.5',
				'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
				'xtend': 'npm:xtend@4.0.1',
				'builtin-status-codes': 'npm:builtin-status-codes@3.0.0'
			}
		},
		'npm:jspm-nodelibs-zlib@0.2.3': {
			'map': {
				'browserify-zlib': 'npm:browserify-zlib@0.1.4'
			}
		},
		'npm:url@0.11.0': {
			'map': {
				'querystring': 'npm:querystring@0.2.0',
				'punycode': 'npm:punycode@1.3.2'
			}
		},
		'npm:browserify-zlib@0.1.4': {
			'map': {
				'readable-stream': 'npm:readable-stream@2.3.5',
				'pako': 'npm:pako@0.2.9'
			}
		},
		'npm:jspm-nodelibs-string_decoder@0.2.2': {
			'map': {
				'string_decoder': 'npm:string_decoder@0.10.31'
			}
		},
		'npm:jspm-nodelibs-os@0.2.2': {
			'map': {
				'os-browserify': 'npm:os-browserify@0.3.0'
			}
		},
		'npm:jspm-nodelibs-crypto@0.2.1': {
			'map': {
				'crypto-browserify': 'npm:crypto-browserify@3.12.0'
			}
		},
		'npm:crypto-browserify@3.12.0': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'browserify-cipher': 'npm:browserify-cipher@1.0.0',
				'randombytes': 'npm:randombytes@2.0.6',
				'browserify-sign': 'npm:browserify-sign@4.0.4',
				'create-hmac': 'npm:create-hmac@1.1.6',
				'create-hash': 'npm:create-hash@1.1.3',
				'public-encrypt': 'npm:public-encrypt@4.0.0',
				'diffie-hellman': 'npm:diffie-hellman@5.0.2',
				'create-ecdh': 'npm:create-ecdh@4.0.0',
				'randomfill': 'npm:randomfill@1.0.4',
				'pbkdf2': 'npm:pbkdf2@3.0.14'
			}
		},
		'npm:randombytes@2.0.6': {
			'map': {
				'safe-buffer': 'npm:safe-buffer@5.1.1'
			}
		},
		'npm:randomfill@1.0.4': {
			'map': {
				'safe-buffer': 'npm:safe-buffer@5.1.1',
				'randombytes': 'npm:randombytes@2.0.6'
			}
		},
		'npm:browserify-sign@4.0.4': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'create-hash': 'npm:create-hash@1.1.3',
				'create-hmac': 'npm:create-hmac@1.1.6',
				'browserify-rsa': 'npm:browserify-rsa@4.0.1',
				'parse-asn1': 'npm:parse-asn1@5.1.0',
				'bn.js': 'npm:bn.js@4.11.8',
				'elliptic': 'npm:elliptic@6.4.0'
			}
		},
		'npm:create-hmac@1.1.6': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'safe-buffer': 'npm:safe-buffer@5.1.1',
				'create-hash': 'npm:create-hash@1.1.3',
				'ripemd160': 'npm:ripemd160@2.0.1',
				'cipher-base': 'npm:cipher-base@1.0.4',
				'sha.js': 'npm:sha.js@2.4.11'
			}
		},
		'npm:create-hash@1.1.3': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'ripemd160': 'npm:ripemd160@2.0.1',
				'cipher-base': 'npm:cipher-base@1.0.4',
				'sha.js': 'npm:sha.js@2.4.11'
			}
		},
		'npm:public-encrypt@4.0.0': {
			'map': {
				'create-hash': 'npm:create-hash@1.1.3',
				'randombytes': 'npm:randombytes@2.0.6',
				'browserify-rsa': 'npm:browserify-rsa@4.0.1',
				'parse-asn1': 'npm:parse-asn1@5.1.0',
				'bn.js': 'npm:bn.js@4.11.8'
			}
		},
		'npm:diffie-hellman@5.0.2': {
			'map': {
				'randombytes': 'npm:randombytes@2.0.6',
				'bn.js': 'npm:bn.js@4.11.8',
				'miller-rabin': 'npm:miller-rabin@4.0.1'
			}
		},
		'npm:pbkdf2@3.0.14': {
			'map': {
				'create-hash': 'npm:create-hash@1.1.3',
				'create-hmac': 'npm:create-hmac@1.1.6',
				'safe-buffer': 'npm:safe-buffer@5.1.1',
				'ripemd160': 'npm:ripemd160@2.0.1',
				'sha.js': 'npm:sha.js@2.4.11'
			}
		},
		'npm:browserify-cipher@1.0.0': {
			'map': {
				'browserify-aes': 'npm:browserify-aes@1.1.1',
				'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
				'browserify-des': 'npm:browserify-des@1.0.0'
			}
		},
		'npm:browserify-aes@1.1.1': {
			'map': {
				'create-hash': 'npm:create-hash@1.1.3',
				'inherits': 'npm:inherits@2.0.3',
				'safe-buffer': 'npm:safe-buffer@5.1.1',
				'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
				'cipher-base': 'npm:cipher-base@1.0.4',
				'buffer-xor': 'npm:buffer-xor@1.0.3'
			}
		},
		'npm:evp_bytestokey@1.0.3': {
			'map': {
				'safe-buffer': 'npm:safe-buffer@5.1.1',
				'md5.js': 'npm:md5.js@1.3.4'
			}
		},
		'npm:browserify-des@1.0.0': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'cipher-base': 'npm:cipher-base@1.0.4',
				'des.js': 'npm:des.js@1.0.0'
			}
		},
		'npm:create-ecdh@4.0.0': {
			'map': {
				'bn.js': 'npm:bn.js@4.11.8',
				'elliptic': 'npm:elliptic@6.4.0'
			}
		},
		'npm:browserify-rsa@4.0.1': {
			'map': {
				'randombytes': 'npm:randombytes@2.0.6',
				'bn.js': 'npm:bn.js@4.11.8'
			}
		},
		'npm:parse-asn1@5.1.0': {
			'map': {
				'create-hash': 'npm:create-hash@1.1.3',
				'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
				'pbkdf2': 'npm:pbkdf2@3.0.14',
				'browserify-aes': 'npm:browserify-aes@1.1.1',
				'asn1.js': 'npm:asn1.js@4.10.1'
			}
		},
		'npm:ripemd160@2.0.1': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'hash-base': 'npm:hash-base@2.0.2'
			}
		},
		'npm:miller-rabin@4.0.1': {
			'map': {
				'bn.js': 'npm:bn.js@4.11.8',
				'brorand': 'npm:brorand@1.1.0'
			}
		},
		'npm:sha.js@2.4.11': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'safe-buffer': 'npm:safe-buffer@5.1.1'
			}
		},
		'npm:cipher-base@1.0.4': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'safe-buffer': 'npm:safe-buffer@5.1.1'
			}
		},
		'npm:elliptic@6.4.0': {
			'map': {
				'bn.js': 'npm:bn.js@4.11.8',
				'inherits': 'npm:inherits@2.0.3',
				'brorand': 'npm:brorand@1.1.0',
				'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
				'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
				'hash.js': 'npm:hash.js@1.1.3',
				'hmac-drbg': 'npm:hmac-drbg@1.0.1'
			}
		},
		'npm:des.js@1.0.0': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
			}
		},
		'npm:md5.js@1.3.4': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'hash-base': 'npm:hash-base@3.0.4'
			}
		},
		'npm:hash-base@2.0.2': {
			'map': {
				'inherits': 'npm:inherits@2.0.3'
			}
		},
		'npm:hash-base@3.0.4': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'safe-buffer': 'npm:safe-buffer@5.1.1'
			}
		},
		'npm:asn1.js@4.10.1': {
			'map': {
				'bn.js': 'npm:bn.js@4.11.8',
				'inherits': 'npm:inherits@2.0.3',
				'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
			}
		},
		'npm:hash.js@1.1.3': {
			'map': {
				'inherits': 'npm:inherits@2.0.3',
				'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
			}
		},
		'npm:hmac-drbg@1.0.1': {
			'map': {
				'hash.js': 'npm:hash.js@1.1.3',
				'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
				'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
			}
		},
		'npm:react-dom@16.2.0': {
			'map': {
				'fbjs': 'npm:fbjs@0.8.16',
				'loose-envify': 'npm:loose-envify@1.3.1',
				'object-assign': 'npm:object-assign@4.1.1',
				'prop-types': 'npm:prop-types@15.6.1'
			}
		}
	}
});
