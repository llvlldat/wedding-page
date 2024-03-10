import { Linter } from 'eslint'

const config: Linter.Config = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'react'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
              moduleDirectory: ['node_modules', 'src'],
            },
          },
    },
}

export default config
