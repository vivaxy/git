/**
 * @since 2020-05-07 16:30
 * @author vivaxy
 */
import * as path from 'path';
import * as fse from 'fs-extra';
import add from '../../add/add';
import init from '../../init/init';
import lsFiles from '../../ls/ls-files';
import commit from '../../commit/commit';
import getCurrentBranch from '../../branch/get-current-branch';
import callsites = require('callsites');

export default async function createProject({
  key = '',
}: { key?: string } = {}) {
  const filePath = callsites()[1].getFileName();
  if (!filePath) {
    throw new Error('Invalid filename');
  }
  const dirPath = path.dirname(filePath);
  const basename = path.basename(filePath, '.ts');
  const workingDirectoryPath = path.join(
    dirPath,
    'working-directory',
    `${basename}__${key}`,
  );
  await fse.remove(workingDirectoryPath);
  await fse.ensureDir(workingDirectoryPath);

  // fs
  async function dispose() {
    await fse.remove(workingDirectoryPath);
  }

  async function fileAdd(filename: string, content: string) {
    await fse.outputFile(path.join(workingDirectoryPath, filename), content);
  }

  // git
  async function gitInit() {
    await init({ cwd: workingDirectoryPath });
  }

  async function gitLsFiles(paths: string[]) {
    return await lsFiles(paths, { cwd: workingDirectoryPath });
  }

  async function gitGetCurrentBranch() {
    return await getCurrentBranch({ cwd: workingDirectoryPath });
  }

  async function gitCreateNewCommit() {
    const filename = path.join(workingDirectoryPath, 'new-commit.md');
    await fse.outputFile(filename, String(Date.now()));
    await add({ cwd: workingDirectoryPath });
    await commit('new commit for testcases', { cwd: workingDirectoryPath });
  }

  return {
    workingDirectoryPath,
    dispose,
    fileAdd,
    gitInit,
    gitLsFiles,
    gitGetCurrentBranch,
    gitCreateNewCommit,
  };
}
