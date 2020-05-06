/**
 * @since 2020-05-06 20:09
 * @author vivaxy
 */
import * as path from 'path';
import * as execa from 'execa';
import * as fse from 'fs-extra';
import add from '../add';
import init from '../../init/init';

const wd = path.join(__dirname, 'working');

beforeAll(async function() {
  await fse.ensureDir(wd);
});

afterAll(async function() {
  await fse.remove(wd);
});

test('add', async function() {
  const filename = 'README.md';

  await fse.outputFile(path.join(wd, filename), '0');
  await init({ cwd: wd });
  const { stdout: stdout1 } = await execa('git', ['ls-files', filename], {
    cwd: wd,
  });
  expect(stdout1).toBe('');
  await add({ cwd: wd });
  const { stdout: stdout2 } = await execa('git', ['ls-files', filename], {
    cwd: wd,
  });
  expect(stdout2).toBe(filename);
});
