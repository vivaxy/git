/**
 * @since 2019-08-01 14:06
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function getUserName(
  { cwd = process.cwd() }: { cwd?: string } = {
    cwd: process.cwd(),
  },
) {
  const { stdout } = await betterExeca(
    'git',
    ['config', '--get', 'user.email'],
    {
      cwd,
    },
  );
  return stdout;
}
