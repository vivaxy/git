/**
 * @since 2019-06-28 10:17
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import * as path from 'path';
import getCurrentRemote from '../get-current-remote';
import { betterExeca } from '../../helpers';

const projectBasePath = path.join(__dirname, '..', '..', '..');

test('get current remote', async function () {
  expect(await getCurrentRemote({ cwd: projectBasePath })).toBe('origin');
});

test('get current remote when multiple remotes', async function () {
  await betterExeca('git', ['remote', 'add', 'test', 'git://test.org'], {
    cwd: projectBasePath,
  });
  expect(await getCurrentRemote({ cwd: projectBasePath })).toBe('origin');
  await betterExeca('git', ['remote', 'remove', 'test'], {
    cwd: projectBasePath,
  });
});
