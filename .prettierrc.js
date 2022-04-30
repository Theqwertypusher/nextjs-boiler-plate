module.exports = {
  semi: false,
  trailingComma: 'none',
  singleQuote: true,
  quoteProps: 'consistent',
  bracketSpacing: true,
  arrowParens: 'always',
  tabWidth: 2,
  parser: 'typescript',
  overrides: [
    {
      files: '*.{css,scss}', // eslint postcss processor works on both
      options: {
        parser: 'css'
      }
    }
  ]
}
