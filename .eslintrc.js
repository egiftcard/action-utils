module.exports = {
  root: true,

  extends: ['@egiftcard/eslint-config'],

  overrides: [
    {
      files: ['*.ts'],
      extends: ['@egiftcard/eslint-config-typescript'],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error', { builtinGlobals: true }],
      },
    },

    {
      files: ['*.js'],
      parserOptions: {
        sourceType: 'script',
      },
      extends: ['@egiftcard/eslint-config-nodejs'],
    },

    {
      files: ['*.test.ts', '*.test.js'],
      extends: ['@egiftcard/eslint-config-jest'],
      rules: {
        'import/unambiguous': 'off',
      },
    },
  ],

  ignorePatterns: ['!.eslintrc.js', '!.prettierrc.js', 'dist/'],
};
