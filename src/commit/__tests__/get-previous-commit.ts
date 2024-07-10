/**
 * @since 2020-05-07 19:42
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import getPreviousCommit from '../get-previous-commit';
import * as project from '../../__tests__/helpers/project';

test('get previous commit', async function () {
  const previousCommit = await getPreviousCommit({
    from: 'aebd444f9ab3384d388ac7d0db38f86feaf21a19',
    cwd: project.rootPath,
  });
  expect(previousCommit).toBe('4fa1e6ccf87974320954e9d9dd87904700907a45');
});
