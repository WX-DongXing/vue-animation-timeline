module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-continue': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-restricted-syntax': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-mixed-operators': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-loop-func': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-expressions': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'for-direction': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'guard-for-in': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/extensions': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-classes-per-file': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/ban-ts-ignore': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
