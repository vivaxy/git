/**
 * @since 20180911 17:16
 * @author vivaxy
 */
import * as path from 'path';
import * as execa from 'execa';
import * as fse from 'fs-extra';
import getCurrentBranch from '../get-current-branch';

const wd = path.join(__dirname, 'fixtures', 'git-repo');

beforeAll(async function() {
  await fse.ensureDir(wd);
  await execa('git', ['init'], { cwd: wd });
});

afterAll(async function() {
  await fse.remove(wd);
});

test('get current branch', async function() {
  expect(await getCurrentBranch({ cwd: wd })).toBe('master');
});
