/**
 * @since 2020-05-05 21:18
 * @author vivaxy
 */
import * as path from 'path';
import isInsideWorkTree from '../is-inside-work-tree';

const root = path.join(__dirname, '..', '..', '..');
test('is inside', async function() {
  const isInSide = await isInsideWorkTree({ cwd: __dirname });
  expect(isInSide).toBe(true);
});

test('is not inside', async function() {
  const isInSide = await isInsideWorkTree({ cwd: path.join(root, '..') });
  expect(isInSide).toBe(false);
});
