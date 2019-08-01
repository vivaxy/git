/**
 * @since 2019-08-01 14:03
 * @author vivaxy
 */
import * as path from 'path';
import getRemoteUrl from '../get-remote-url';

const projectBasePath = path.join(__dirname, '..', '..', '..');

test('get remote url', async function() {
  expect(await getRemoteUrl({ cwd: projectBasePath, remote: 'origin' })).toBe(
    'git@github.com:vivaxy/git.git',
  );
});
