import path from 'path'
import { fileURLToPath } from 'url'
import ghpages from 'gh-pages'

// Get the directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/Leo36094/wsa2025.git',
}

const callback = (err) => {
  if (err) console.error(err)
  else console.log('publish success')
}

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish(path.resolve(__dirname, 'dist'), options, callback)
