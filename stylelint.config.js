module.exports = {
  customSyntax: 'postcss-scss',

  plugins: ['stylelint-scss'],

  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],

  rules: {
    'scss/dollar-variable-pattern': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
  },
}
