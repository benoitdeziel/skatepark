module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    rules: {
      'jsx-a11y/label-has-for': 0,
    },
  };
  