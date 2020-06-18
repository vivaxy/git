/**
 * @since 2020-06-18 17:10
 * @author vivaxy
 */
import * as path from 'path';
import getTags from '../get-tags';

const projectBase = path.join(__dirname, '..', '..', '..');

test('get tags', async function() {
  expect(
    await getTags({ match: '1234567890', cwd: projectBase }),
  ).toStrictEqual([]);

  expect(await getTags({ match: 'v0.1.0', cwd: projectBase })).toStrictEqual([
    'v0.1.0',
  ]);
});
