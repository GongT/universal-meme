SystemJS.config({
	paths: {
		'baseURL': '/',
		'application': 'scripts/',
	},
	browserConfig: {
		'paths': {
			'npm:': 'jspm_packages/npm/',
			'application/': 'scripts/',
		},
	},
	nodeConfig: {
		'paths': {
			'npm:': 'dist/jspm_packages/npm/',
			'application/': 'dist/scripts/',
		},
	},
	packages: {
		'application': {
			'main': 'index.js',
		},
	},
});

SystemJS.config({
	packageConfigPaths: [
		'npm:@*/*.json',
		'npm:*.json',
	],
	map: {
		'jquery': 'npm:jquery@3.3.1',
	},
	packages: {},
});
