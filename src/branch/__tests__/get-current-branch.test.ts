/**
 * @since 20180911 17:16
 * @author vivaxy
 */
import getCurrentBranch from '../get-current-branch';
import createProject from '../../__tests__/helpers/create-project';

test('get current branch', async function() {
  const project = await createProject();
  await project.gitInit();
  expect(await getCurrentBranch({ cwd: project.workingDirectoryPath })).toBe(
    'master',
  );
  await project.dispose();
});
