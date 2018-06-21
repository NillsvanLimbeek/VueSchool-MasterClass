module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/airbnb'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': 'off',
        'semi': ["error", "never"],
        'comma-dangle': 'off',
        'linebreak-style': 'off',
        'space-before-function-paren': ['error', 'always'],
        'max-len': 'off',

        // vue rules
        'vue/require-v-for-key': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}