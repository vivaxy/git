/**
 * @since 2020-05-05 21:07
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function getRootPath(
  { cwd = process.cwd() }: { cwd?: string } = {
    cwd: process.cwd(),
  },
) {
  try {
    const { stdout } = await betterExeca(
      'git',
      ['rev-parse', '--show-toplevel'],
      { cwd },
    );
    return stdout;
  } catch (e) {
    throw new Error('Not a git repository.');
  }
}
