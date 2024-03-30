module.exports = {
  // Lint and prettify TS and JS (SRC) files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`
      `npm run lint --fix ${filenames.join(' --file')}`,
  ]
}
