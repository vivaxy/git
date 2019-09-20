/**
 * @since 20180911 17:16
 * @author vivaxy
 */
import * as path from 'path';
import getPreviousCommit from '../get-previous-commit';

const projectBase = path.join(__dirname, '..', '..', '..');

test('get previous commit', async function() {
  expect(
    await getPreviousCommit({
      from: 'd236e911',
      cwd: projectBase,
    }),
  ).toStrictEqual('25c773f');
});
