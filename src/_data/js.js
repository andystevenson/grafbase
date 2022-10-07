const { readdirSync } = require('node:fs')

const files = readdirSync('./src/js/pages')
console.log('pageScript', files)

const srcFromFile = (fileSlug) => {
  const search = fileSlug || 'index'
  const file = files.find((file) => file.startsWith(`${search}.`))
  console.log('src=', { search, fileSlug, file })
  return file ? `/@input/js/pages/${file}` : null
}

module.exports = {
  files,
  script(page) {
    console.log({ page })
    return srcFromFile(page.fileSlug)
  },
}
