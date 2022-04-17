module.exports = {
  root: true,
  env: {
    node: true
  },
  // globals: {
  //   defineProps: 'readonly',
  //   defineEmits: 'readonly',
  //   defineExpose: 'readonly'
  // },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    // 'vue-global-api'
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': [
      'error',
      // we are only using this rule to check for unused arguments since TS
      // catches unused variables but not args.
      { varsIgnorePattern: '.*', args: 'none' }
    ]
  }
}
