/**
 * @since 20180911 17:16
 * @author vivaxy
 */
import * as path from 'path';
import getTags from '../get-tags';

const projectBase = path.join(__dirname, '..', '..', '..');

test('get tags', async function() {
  const tags = await getTags({ cwd: projectBase });
  expect(tags.includes('v0.2.0')).toBe(true);
});
