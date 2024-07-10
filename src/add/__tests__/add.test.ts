/**
 * @since 2020-05-06 20:09
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import add from '../add';
import createProject from '../../__tests__/helpers/create-project';

test('add', async function () {
  const project = await createProject();
  const filename = 'README.md';
  await project.fileAdd(filename, '0');
  await project.gitInit();
  const stdout1 = await project.gitLsFiles([filename]);
  expect(stdout1).toStrictEqual([]);
  await add({ cwd: project.workingDirectoryPath });
  const stdout2 = await project.gitLsFiles([filename]);
  expect(stdout2).toStrictEqual([filename]);
  await project.dispose();
});
