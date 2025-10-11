#!/usr/bin/env node

/**
 * Check all files in the project
 * This scans ALL files in the project, not just staged ones
 * Use this to audit the entire codebase for test data
 */

import { readdirSync, readFileSync, statSync } from 'fs'
import { resolve, join, relative } from 'path'

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
}

// Rules to check
const rules = [
  {
    name: 'console.log statements',
    pattern: /console\.(log|debug|info)\(/g,
    exclude: [
      /\/\/ eslint-disable.*console/,
      /\/\* eslint-disable.*console/,
      /.*(\/\/ TODO:|\/\/ FIXME:).*console/,
    ],
    severity: 'error',
    message: 'Remove console.log/debug/info statements before pushing',
  },
  {
    name: 'debugger statements',
    pattern: /\bdebugger\b/g,
    severity: 'error',
    message: 'Remove debugger statements before pushing',
  },
  {
    name: 'test/demo data markers',
    pattern: /(\/\/|\/\*)\s*(TEST|DEMO|MOCK)\s*(DATA|CODE)/gi,
    severity: 'error',
    message: 'Remove test/demo data markers before pushing',
  },
  {
    name: 'TODO/FIXME comments',
    pattern: /(\/\/|\/\*)\s*(TODO|FIXME):/gi,
    severity: 'warning',
    message: 'Consider resolving TODO/FIXME comments',
  },
]

// File patterns to check
const includePatterns = ['.ts', '.tsx', '.vue', '.js', '.jsx']
const excludePatterns = [
  'node_modules/',
  'dist/',
  '.git/',
  'coverage/',
  'scripts/',
  '*.md',
  'README',
  'CHANGELOG',
  '.husky/',
  '.ghpages.js',
]

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function shouldCheckFile(filePath) {
  // Check if file has valid extension
  const hasValidExtension = includePatterns.some((ext) => filePath.endsWith(ext))
  if (!hasValidExtension) return false

  // Check if file is in excluded directory
  const isExcluded = excludePatterns.some((pattern) => filePath.includes(pattern))
  if (isExcluded) return false

  return true
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = readdirSync(dirPath)

  files.forEach((file) => {
    const filePath = join(dirPath, file)

    // Skip if excluded
    const relativePath = relative(process.cwd(), filePath)
    const isExcluded = excludePatterns.some((pattern) => relativePath.includes(pattern))
    if (isExcluded) return

    if (statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles)
    } else {
      if (shouldCheckFile(relativePath)) {
        arrayOfFiles.push(relativePath)
      }
    }
  })

  return arrayOfFiles
}

function checkFile(filePath) {
  try {
    const fullPath = resolve(process.cwd(), filePath)
    const content = readFileSync(fullPath, 'utf-8')
    const lines = content.split('\n')

    const issues = []

    rules.forEach((rule) => {
      lines.forEach((line, index) => {
        // Check if line matches the pattern
        const matches = line.match(rule.pattern)
        if (!matches) return

        // Check exclusions
        if (rule.exclude) {
          const isExcluded = rule.exclude.some((excludePattern) => excludePattern.test(line))
          if (isExcluded) return
        }

        issues.push({
          rule: rule.name,
          line: index + 1,
          content: line.trim(),
          severity: rule.severity,
          message: rule.message,
        })
      })
    })

    return issues
  } catch (error) {
    log(`Error reading file ${filePath}: ${error.message}`, 'red')
    return []
  }
}

function main() {
  log('\n🔍 Checking ALL files in the project for test data and debug code...\n', 'cyan')

  const allFiles = getAllFiles(process.cwd())

  if (allFiles.length === 0) {
    log('No files to check', 'yellow')
    process.exit(0)
  }

  log(`Checking ${allFiles.length} file(s)...\n`, 'cyan')

  const allIssues = []

  allFiles.forEach((file) => {
    const issues = checkFile(file)
    if (issues.length > 0) {
      allIssues.push({ file, issues })
    }
  })

  if (allIssues.length === 0) {
    log('✅ All checks passed! No issues found.\n', 'green')
    process.exit(0)
  }

  // Display issues
  let errorCount = 0
  let warningCount = 0

  allIssues.forEach(({ file, issues }) => {
    log(`\n📄 ${file}`, 'cyan')

    issues.forEach((issue) => {
      const icon = issue.severity === 'error' ? '❌' : '⚠️'
      const color = issue.severity === 'error' ? 'red' : 'yellow'

      if (issue.severity === 'error') errorCount++
      if (issue.severity === 'warning') warningCount++

      log(`  ${icon} Line ${issue.line}: ${issue.rule}`, color)
      log(`     ${issue.content}`, 'reset')
      log(`     ${issue.message}`, 'yellow')
    })
  })

  // Summary
  log('\n' + '='.repeat(70), 'cyan')
  log(`\n📊 Summary:`, 'cyan')
  log(`   Found ${errorCount} error(s) and ${warningCount} warning(s) in ${allIssues.length} file(s)`, 'yellow')
  log(`   Total files scanned: ${allFiles.length}`, 'cyan')

  log('\n📝 Files that need to be fixed:', 'cyan')
  allIssues.forEach(({ file, issues }) => {
    const errorIssues = issues.filter(i => i.severity === 'error')
    if (errorIssues.length > 0) {
      log(`   - ${file} (${errorIssues.length} issue${errorIssues.length > 1 ? 's' : ''})`, 'red')
    }
  })

  if (errorCount > 0) {
    log('\n❌ Action required: Please fix these issues before pushing to production\n', 'red')
    process.exit(1)
  } else if (warningCount > 0) {
    log('\n⚠️  Warnings found - review recommended\n', 'yellow')
    process.exit(0)
  }
}

main()

