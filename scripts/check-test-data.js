#!/usr/bin/env node

/**
 * Pre-push check script
 * Checks for test data, debug code, and other unwanted content before pushing to remote
 */

import { execSync } from 'child_process'
import { readFileSync } from 'fs'
import { resolve, relative } from 'path'

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
    pattern: /console\.(log|debug|info|warn|error)/g,
    exclude: [
      /\/\/ eslint-disable.*console/,
      /\/\* eslint-disable.*console/,
      /.*(\/\/ TODO:|\/\/ FIXME:).*console/,
    ],
    severity: 'error',
    message: 'Remove console.log statements before pushing',
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
  {
    name: 'unused imports (obvious)',
    pattern: /import\s+.*\s+from\s+['"].*['"]\s*\/\/\s*unused/gi,
    severity: 'warning',
    message: 'Remove unused imports',
  },
]

// File patterns to check
const includePatterns = ['.ts', '.tsx', '.vue', '.js', '.jsx']
const excludePatterns = [
  'node_modules/',
  'dist/',
  '.git/',
  'coverage/',
  'scripts/check-test-data.js', // Exclude this file itself
  '*.md',                        // Exclude all Markdown files
  'README',                      // Exclude README files
  'CHANGELOG',                   // Exclude CHANGELOG files
]

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`)
}

function getStagedFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
      encoding: 'utf-8',
    })
    return output.trim().split('\n').filter(Boolean)
  } catch (error) {
    log('Error getting staged files', 'red')
    return []
  }
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
  log('\n🔍 Checking for test data and debug code...\n', 'cyan')

  const stagedFiles = getStagedFiles()

  if (stagedFiles.length === 0) {
    log('No files to check', 'yellow')
    process.exit(0)
  }

  const filesToCheck = stagedFiles.filter(shouldCheckFile)

  if (filesToCheck.length === 0) {
    log('No relevant files to check', 'green')
    process.exit(0)
  }

  log(`Checking ${filesToCheck.length} file(s)...\n`, 'cyan')

  const allIssues = []

  filesToCheck.forEach((file) => {
    const issues = checkFile(file)
    if (issues.length > 0) {
      allIssues.push({ file, issues })
    }
  })

  if (allIssues.length === 0) {
    log('✅ All checks passed!\n', 'green')
    process.exit(0)
  }

  // Display issues
  let hasErrors = false
  let hasWarnings = false

  allIssues.forEach(({ file, issues }) => {
    log(`\n📄 ${file}`, 'cyan')

    issues.forEach((issue) => {
      const icon = issue.severity === 'error' ? '❌' : '⚠️'
      const color = issue.severity === 'error' ? 'red' : 'yellow'

      if (issue.severity === 'error') hasErrors = true
      if (issue.severity === 'warning') hasWarnings = true

      log(`  ${icon} Line ${issue.line}: ${issue.rule}`, color)
      log(`     ${issue.content}`, 'reset')
      log(`     ${issue.message}`, 'yellow')
    })
  })

  // Summary
  log('\n' + '='.repeat(50), 'cyan')
  if (hasErrors) {
    log('\n❌ Push blocked: Please fix the errors above before pushing\n', 'red')
    process.exit(1)
  } else if (hasWarnings) {
    log('\n⚠️  Warnings found but push is allowed\n', 'yellow')
    process.exit(0)
  }
}

main()

