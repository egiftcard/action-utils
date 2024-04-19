module.exports = {
  root: true,

  extends: ['@egiftcard/eslint-config'],

  overrides: [
    {
      files: ['*.ts'],
      extends: ['@egiftcard/eslint-config-typescript'],
    },

    {
      files: ['*.js'],
      parserOptions: {
        sourceType: 'script',
      },
      extends: ['@egiftcard/eslint-config-nodejs'],
    },

    {
      files: ['yarn.config.cjs'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2020,
      },
      settings: {
        jsdoc: {
          mode: 'typescript',
        },
      },
      extends: ['@egiftcard/eslint-config-nodejs'],
    },

    {
      files: ['*.test.ts', '*.test.js'],
      extends: [
        '@egiftcard/eslint-config-jest',
        '@egiftcard/eslint-config-nodejs',
      ],
    },
  ],

  ignorePatterns: [
    '!.eslintrc.js',
    '!.prettierrc.js',
    'dist/',
    'docs/',
    '.yarn/',
  ],
};
