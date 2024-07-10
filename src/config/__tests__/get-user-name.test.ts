/**
 * @since 2020-05-07 20:07
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import getUserName from '../get-user-name';
import createProject from '../../__tests__/helpers/create-project';

test('get user name', async function () {
  const project = await createProject();
  await project.gitInit();
  const originalName = await project.gitGetUserName();
  const name = 'vivaxy';
  await project.gitSetUserName(name);
  const actualName = await getUserName({ cwd: project.workingDirectoryPath });
  expect(actualName).toBe(name);
  await project.gitSetUserName(originalName);
  await project.dispose();
});
