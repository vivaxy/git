/**
 * @since 2020-05-05 21:09
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import * as path from 'path';
import getRootPath from '../get-root-path';

const root = path.join(__dirname, '..', '..', '..');
test('get root path', async function () {
  const rootPath = await getRootPath({ cwd: __dirname });
  expect(rootPath).toBe(root);
});

test('throw error', async function () {
  await expect(getRootPath({ cwd: path.join(root, '..') })).rejects.toThrow(
    'Not a git repository.',
  );
});
