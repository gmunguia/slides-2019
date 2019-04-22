#!/usr/bin/env node
(async () => {
  const globby = require('globby')
  const path = require('path')
  const paths = await globby(['./**/*.mdx'], {gitignore: true}).map(path.dirname)
  console.log(paths.join('\n'))
})()
