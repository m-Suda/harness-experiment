module.exports = {
    env: {
        'browser': true,
        'es6': true,
        'node': true,
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    parser: '@typescript-eslint/parser',
    globals: {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
    },
    parserOptions: {
        'ecmaVersion': 2018,
        'sourceType': 'module',
    },
    'rules': {
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        'max-classes-per-file': 'off',
    },
};
