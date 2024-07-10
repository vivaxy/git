/**
 * @since 2019-07-31 14:11
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function getCurrentBranch(
  {
    cwd = process.cwd(),
  }: {
    cwd?: string;
  } = {
    cwd: process.cwd(),
  },
): Promise<string> {
  const { stdout } = await betterExeca(
    'git',
    ['symbolic-ref', '--short', 'HEAD'],
    {
      cwd,
    },
  );
  return stdout;
}
