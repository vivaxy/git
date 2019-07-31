/**
 * @since 2016-11-22 16:05
 * @author vivaxy
 */
import * as path from 'path';
import * as fse from 'fs-extra';
import { betterExeca } from '../helpers';

export default async function isRepositoryRoot({
  cwd,
}: {
  cwd: string;
}): Promise<boolean> {
  const gitExists = await fse.pathExists(path.join(cwd, '.git'));
  if (gitExists) {
    const { stdout } = await betterExeca(
      'git',
      ['rev-parse', '--is-inside-work-tree'],
      { cwd },
    );
    if (stdout === 'true') {
      return true;
    }
  }
  return false;
}
