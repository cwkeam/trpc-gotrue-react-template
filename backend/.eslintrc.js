module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		es6: true,
	},
	plugins: ['simple-import-sort', 'unused-imports'],
	rules: {
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'ignore',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		camelcase: ['warn', { ignoreDestructuring: true }],
		'unused-imports/no-unused-imports-ts': ['error'],
		'simple-import-sort/imports': [
			'error',
			{
				groups: [
					// Node.js builtins. You could also generate this regex if you use a `.js` config.
					// For example: `^(${require("module").builtinModules.join("|")})(/|$)`
					['dotenv', 'reflect-metadata'],
					[`^(${require('module').builtinModules.join('|')})(/|$)`],
					// Packages.
					['^@trpc?\\w'],
					// Packages.
					['^@?\\w'],
					// Internal packages.
					['^(@|@utils)(/.*|$)'],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports. Put `..` last.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports. Put same-folder imports and `.` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
				],
			},
		],
		'simple-import-sort/exports': 'error',
		'linebreak-style': ['error', 'unix'],
	},
}

