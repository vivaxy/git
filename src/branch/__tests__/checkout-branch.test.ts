/**
 * @since 2020-05-07 16:27
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import checkoutBranch from '../checkout-branch';
import createProject from '../../__tests__/helpers/create-project';

test('checkout branch', async function () {
  const project = await createProject();
  await project.gitInit();
  const branchName = 'test';
  const masterBranchName = 'master';
  await project.gitCreateNewCommit();
  await checkoutBranch({
    cwd: project.workingDirectoryPath,
    branch: branchName,
    create: true,
  });
  await project.gitCreateNewCommit();
  await checkoutBranch({
    cwd: project.workingDirectoryPath,
    branch: masterBranchName,
  });
  const currentBranch = await project.gitGetCurrentBranch();
  expect(currentBranch).toBe(masterBranchName);
  await project.dispose();
});

test('checkout new branch', async function () {
  const project = await createProject({ key: 'create' });
  await project.gitInit();
  const branchName = 'test';
  await checkoutBranch({
    cwd: project.workingDirectoryPath,
    branch: branchName,
    create: true,
  });
  const currentBranch1 = await project.gitGetCurrentBranch();
  expect(currentBranch1).toBe(branchName);
  await project.dispose();
});
