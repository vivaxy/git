/**
 * @since 2020-05-07 20:02
 * @author vivaxy
 */
import getUserEmail from '../get-user-email';
import createProject from '../../__tests__/helpers/create-project';

test('get user email', async function() {
  const project = await createProject();
  const email = 'a@b.c';
  await project.gitSetUserEmail(email);
  const actualEmail = await getUserEmail({ cwd: project.workingDirectoryPath });
  expect(actualEmail).toBe(email);
});
