/**
 * @since 2019-06-28 10:17
 * @author vivaxy
 */
import * as path from 'path';
import getCurrentRemote from '../get-current-remote';

const projectBasePath = path.join(__dirname, '..', '..', '..');

test('get current remote', async function() {
  expect(await getCurrentRemote({ cwd: projectBasePath })).toBe('origin');
});
