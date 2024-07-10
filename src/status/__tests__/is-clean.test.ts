/**
 * @since 2019-06-26 20:24
 * @author vivaxy
 */
import { expect, test, beforeAll, afterAll } from 'vitest';
import * as path from 'path';
import * as fse from 'fs-extra';
import { execa } from 'execa';
import isClean from '../is-clean';

const wd = path.join(__dirname, 'fixtures', 'git-repo');

beforeAll(async function () {
  await fse.ensureDir(wd);
  await execa('git', ['init'], { cwd: wd });
});

afterAll(async function () {
  await fse.remove(wd);
});

test('should be clean', async function () {
  const clean = await isClean({ cwd: wd });
  expect(clean).toBe(true);
});

test('should not be clean', async function () {
  const testFilePath = path.join(wd, 'a.js');
  await fse.outputFile(testFilePath, '0');
  const clean = await isClean({ cwd: wd });
  await fse.remove(testFilePath);
  expect(clean).toBe(false);
});
