
import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'


async function main(): Promise<void> {
  const npmrc = path.resolve(process.cwd(), '.npmrc')

  let lines: string[] = []
  if (fs.existsSync(npmrc)) {
    lines.push(fs.readFileSync(npmrc, 'utf8'))
  }

  if (process.env.FONTAWESOME_TOKEN) {
    console.log('* Configure Font Awesome')
    lines.push(`@fortawesome:registry=https://npm.fontawesome.com/`)
    lines.push(`//npm.fontawesome.com/:_authToken=${process.env.FONTAWESOME_TOKEN}`)
  }

  if (process.env.GITHUB_TOKEN) {
    console.log('* Configure GitHub Packages')
    lines.push(`@altipla-consulting:registry=https://npm.pkg.github.com`)
    lines.push(`//npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}`)
    lines.push(`always-auth=true`)
  }

  if (process.env.NPM_TOKEN) {
    console.log('* Configure NPM')
    lines.push(`//registry.npmjs.org/:_authToken=${process.env.NPM_TOKEN}`)
  }

  lines.push('git-tag-version=false')
  
  console.log('* Write .npmrc')
  fs.writeFileSync(npmrc, lines.join(os.EOL), 'utf-8')
}

main()
