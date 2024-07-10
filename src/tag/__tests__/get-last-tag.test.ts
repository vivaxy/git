/**
 * @since 20180911 17:16
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import * as path from 'path';
import getLastTag from '../get-last-tag';

const projectBase = path.join(__dirname, '..', '..', '..');

test('get last tag', async function () {
  expect(
    await getLastTag({ from: 'd236e911', cwd: projectBase }),
  ).toStrictEqual('v0.1.8');
});
