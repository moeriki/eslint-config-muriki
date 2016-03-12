'use strict'

module.exports = {

  rules: {

    /**
     * Possible Errors
     */

    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 1,
    'no-extra-parens': 1,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 1,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 1,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': [1, {
      requireReturn: false,
      requireParamDescription: false,
      requireReturnDescription: false,
    }],
    'valid-typeof': 2,

    /**
     * Best Practices
     */

    'accessor-pairs': [2, { getWithoutSet: true }],
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'complexity': [1, 7],
    'consistent-return': 2,
    'curly': 2,
    'default-case': 1,
    'dot-location': [1, 'property'],
    'dot-notation': 1,
    'eqeqeq': [1, 'smart'],
    'guard-for-in': 1,
    'no-caller': 2,
    'no-div-regex': 1,
    'no-else-return': 1,
    'no-empty-function': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 1,
    'no-implicit-coercion': 1,
    'no-implied-eval': 2,
    'no-invalid-this': 1,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 1,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-multi-spaces': 1,
    'no-multi-str': 1,
    'no-native-reassign': 2,
    'no-new': 1,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 1,
    'no-script-url': 2,
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-warning-comments': 1,
    'no-with': 2,
    'radix': 2,
    'wrap-iife': 1,
    'yoda': 1,

    /**
     * Strict
     */

    'strict': 2,

    /**
     * Variables
     */

    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef': [2, { typeof: true }],
    'no-undef-init': 1,
    'no-unused-vars': [1, {
      vars: 'all',
      args: 'after-used',
    }],
    'no-use-before-define': [2, 'nofunc'],

  },

}
