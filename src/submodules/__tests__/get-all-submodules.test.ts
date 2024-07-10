/**
 * @since 20180911 17:16
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import * as path from 'path';
import getAllSubmodules from '../get-all-submodules';

const projectBase = path.join(__dirname, '..', '..', '..');

test('get current branch', async function () {
  expect(await getAllSubmodules({ cwd: projectBase })).toStrictEqual([]);
});
