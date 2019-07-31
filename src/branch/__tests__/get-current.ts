/**
 * @since 20180911 17:16
 * @author vivaxy
 */
import * as path from 'path';
import getCurrentBranch from '../get-current';

const projectBase = path.join(__dirname, '..', '..', '..');

test('get current branch', async function() {
  expect(await getCurrentBranch({ cwd: projectBase })).toBe('master');
});
