# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [3.1.1](https://github.com/vivaxy/git/compare/v3.1.0...v3.1.1) (2020-02-05)


### Bug Fixes

* **commit:** :bug:  fix `getCommit` return type `tags` ([37d02d4](https://github.com/vivaxy/git/commit/37d02d4))

## [3.1.0](https://github.com/vivaxy/git/compare/v3.0.0...v3.1.0) (2020-02-05)


### Features

* **commit:** :sparkles:  add `getCommits` ([f595747](https://github.com/vivaxy/git/commit/f595747))

## [3.0.0](https://github.com/vivaxy/git/compare/v2.5.0...v3.0.0) (2020-02-04)


### ⚠ BREAKING CHANGES

* **tag:** remove `getTagByRev`

### Features

* **commit:** :sparkles:  add `getCommitByTag` ([2d8ecc3](https://github.com/vivaxy/git/commit/2d8ecc3))
* **tag:** :sparkles:  remove `getTagByRev` ([6d1a643](https://github.com/vivaxy/git/commit/6d1a643))

## [2.5.0](https://github.com/vivaxy/git/compare/v2.4.0...v2.5.0) (2020-02-04)


### Features

* **merge:** :sparkles:  add `merge` ([a36e62b](https://github.com/vivaxy/git/commit/a36e62b))

## [2.4.0](https://github.com/vivaxy/git/compare/v2.3.0...v2.4.0) (2020-02-04)


### Features

* **branch:** :sparkles:  add `create` option to `checkoutBranch` ([c3121cc](https://github.com/vivaxy/git/commit/c3121cc))

## [2.3.0](https://github.com/vivaxy/git/compare/v2.2.1...v2.3.0) (2020-02-04)


### Features

* **branch:** :sparkles:  add `checkoutBranch` ([660a2ec](https://github.com/vivaxy/git/commit/660a2ec))

### [2.2.1](https://github.com/vivaxy/git/compare/v2.2.0...v2.2.1) (2020-01-23)


### Bug Fixes

* **ls:** :bug: fix `ls-files` not exported ([d8d41dd](https://github.com/vivaxy/git/commit/d8d41dd))

## [2.2.0](https://github.com/vivaxy/git/compare/v2.1.0...v2.2.0) (2020-01-23)


### Features

* **ignore:** :sparkles: add `checkIgnore` ([7e3f62a](https://github.com/vivaxy/git/commit/7e3f62a))
* **ls:** :sparkles: add `ls-files` ([d963326](https://github.com/vivaxy/git/commit/d963326))

## [2.1.0](https://github.com/vivaxy/git/compare/v2.0.1...v2.1.0) (2020-01-21)


### Features

* **config:** :sparkles: add `git.setUserName` and `git.setUserEmail` ([8b8e374](https://github.com/vivaxy/git/commit/8b8e374))

### [2.0.1](https://github.com/vivaxy/git/compare/v2.0.0...v2.0.1) (2020-01-20)

## [2.0.0](https://github.com/vivaxy/git/compare/v1.3.0...v2.0.0) (2020-01-20)


### ⚠ BREAKING CHANGES

* **get-rev-count:** The type of `paths` is changed from `string` to `string[]`

### Features

* **get-rev-count:** :sparkles: support paths as an array ([62892a3](https://github.com/vivaxy/git/commit/62892a3))

## [1.3.0](https://github.com/vivaxy/git/compare/v1.2.0...v1.3.0) (2020-01-20)


### Features

* **remote:** :sparkles: add `git remote add shortname url` ([ea79cf3](https://github.com/vivaxy/git/commit/ea79cf3))

## [1.2.0](https://github.com/vivaxy/git/compare/v1.1.1...v1.2.0) (2020-01-20)


### Features

* **init:** :sparkles: add `git init` ([8e3f52a](https://github.com/vivaxy/git/commit/8e3f52a))

### [1.1.1](https://github.com/vivaxy/git/compare/v1.1.0...v1.1.1) (2019-12-23)


### Bug Fixes

* **get-rev-count:** :bug: fix default paths ([bc3fddc](https://github.com/vivaxy/git/commit/bc3fddc))

## [1.1.0](https://github.com/vivaxy/git/compare/v1.0.1...v1.1.0) (2019-09-20)


### Features

* **tag/get-tags:** :sparkles: support match and sort options ([039930e](https://github.com/vivaxy/git/commit/039930e))

### [1.0.1](https://github.com/vivaxy/git/compare/v1.0.0...v1.0.1) (2019-09-20)


### Bug Fixes

* **export:** :bug: export getTags and getPreviousCommit ([f9a8587](https://github.com/vivaxy/git/commit/f9a8587))

## [1.0.0](https://github.com/vivaxy/git/compare/v0.2.0...v1.0.0) (2019-09-20)


### Features

* **commit:** get-previous-commit ([181a6a5](https://github.com/vivaxy/git/commit/181a6a5))
* **tag:** get-tags ([a57cfa8](https://github.com/vivaxy/git/commit/a57cfa8))

## [0.2.0](https://github.com/vivaxy/git/compare/v0.1.8...v0.2.0) (2019-09-20)


### ⚠ BREAKING CHANGES

* **tag/get-last-tag:** 3 args to 1 arg

### Features

* **tag/get-last-tag:** :sparkles: add default value to match ([d236e91](https://github.com/vivaxy/git/commit/d236e91))

### [0.1.8](https://github.com/vivaxy/git/compare/v0.1.7...v0.1.8) (2019-09-20)


### Features

* **status:** :sparkles: getHeadCommit ([ace9c05](https://github.com/vivaxy/git/commit/ace9c05))
* **tag/get-last-tag:** :sparkles: Support setting from to get last tag ([25c773f](https://github.com/vivaxy/git/commit/25c773f))

### [0.1.7](https://github.com/vivaxy/git/compare/v0.1.6...v0.1.7) (2019-08-01)


### Features

* **remote:** :sparkles: add getCurrentRemoteUrl ([cfffcc1](https://github.com/vivaxy/git/commit/cfffcc1))

### [0.1.6](https://github.com/vivaxy/git/compare/v0.1.5...v0.1.6) (2019-08-01)


### Features

* **config & remote:** :sparkles: add getUserName, getUserName and getRe ([8b1ef17](https://github.com/vivaxy/git/commit/8b1ef17))

### [0.1.5](https://github.com/vivaxy/git/compare/v0.1.4...v0.1.5) (2019-08-01)


### Bug Fixes

* **tag:** :bug: fix tagging lightweight ([ab0667c](https://github.com/vivaxy/git/commit/ab0667c))


### Features

* **fetch:** :sparkles: add fetch ([19e3f1f](https://github.com/vivaxy/git/commit/19e3f1f))

### [0.1.4](https://github.com/vivaxy/git/compare/v0.1.3...v0.1.4) (2019-07-31)

### [0.1.3](https://github.com/vivaxy/git/compare/v0.1.2...v0.1.3) (2019-07-31)

### [0.1.2](https://github.com/vivaxy/git/compare/v0.1.1...v0.1.2) (2019-07-31)


### Features

* **DEPRECATED:** :sparkles: ([ca9b2da](https://github.com/vivaxy/git/commit/ca9b2da))
* **init:** :sparkles: initial commit ([7b11a34](https://github.com/vivaxy/git/commit/7b11a34))
