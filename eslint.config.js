module.exports = {
  overrides: [
    {
      files: ['public/service-worker.js'],
      env: {
        serviceworker: true,
      },
      rules: {
        'no-restricted-globals': ['error', 'event', 'fdescribe'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
