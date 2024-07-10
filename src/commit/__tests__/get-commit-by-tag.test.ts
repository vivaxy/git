/**
 * @since 2020-05-07 19:36
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import getCommitByTag from '../get-commit-by-tag';
import * as project from '../../__tests__/helpers/project';

test('get commit by tag', async function () {
  const commit = await getCommitByTag({ tag: 'v4.0.0', cwd: project.rootPath });
  expect(commit).toBe('aebd444f9ab3384d388ac7d0db38f86feaf21a19');
});
