/**
 * @since 2019-08-01 14:03
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import * as path from 'path';
import getRemoteUrl from '../get-remote-url';

const projectPath = path.join(__dirname, '..', '..', '..');

test('get remote url', async function () {
  expect(
    [
      'https://github.com/vivaxy/git.git',
      'git@github.com:vivaxy/git.git',
    ].includes(await getRemoteUrl({ cwd: projectPath, remote: 'origin' })),
  ).toBe(true);
});
