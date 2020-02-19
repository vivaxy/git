/**
 * @since 2019-08-01 14:03
 * @author vivaxy
 */
import * as path from 'path';
import getRemoteUrl from '../get-remote-url';

const projectPath = path.join(__dirname, '..', '..', '..');

test('get remote url', async function() {
  expect(await getRemoteUrl({ cwd: projectPath, remote: 'origin' })).toBe(
    'https://github.com/vivaxy/git.git',
  );
});
