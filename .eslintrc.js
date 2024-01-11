const stylistic = require('@stylistic/eslint-plugin')

const customized = stylistic.configs.customize({
    // the following options are the default values
    indent: 4,
    quotes: 'single',
    semi: false,
    jsx: true,
    // ...
})

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}", '*.ts', '*.tsx'
            ],
            "parserOptions": {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@stylistic",
        "react"
    ],
    "rules": {
        ...customized.rules,
    }
}
