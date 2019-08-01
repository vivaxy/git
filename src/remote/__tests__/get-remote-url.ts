/**
 * @since 2019-08-01 14:03
 * @author vivaxy
 */
import * as path from 'path';
import * as fse from 'fs-extra';
import * as execa from 'execa';
import getRemoteUrl from '../get-remote-url';

const wd = path.join(__dirname, 'fixtures', 'get-remote-url');

beforeAll(async function() {
  await fse.ensureDir(wd);
  await execa('git', ['clone', 'https://github.com/vivaxy/git.git'], {
    cwd: wd,
  });
});

afterAll(async function() {
  await fse.remove(wd);
});

test('get remote url', async function() {
  const gitRepoPath = path.join(wd, 'git');
  expect(await getRemoteUrl({ cwd: gitRepoPath, remote: 'origin' })).toBe(
    'https://github.com/vivaxy/git.git',
  );
});
