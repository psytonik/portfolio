import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
	{ignores: ['.next/**', 'node_modules/**', 'public/**', 'next-env.d.ts']},
	...nextCoreWebVitals,
	...nextTypescript,
	{
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
		},
	},
	{
		// Config files are CommonJS, loaded by Node before the bundler runs.
		files: ['*.js'],
		rules: {'@typescript-eslint/no-require-imports': 'off'},
	},
];

export default config;
