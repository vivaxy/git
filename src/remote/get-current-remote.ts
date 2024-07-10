/**
 * @since 2019-06-28 10:17
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function getCurrentRemote(
  {
    cwd = process.cwd(),
  }: {
    cwd?: string;
  } = {
    cwd: process.cwd(),
  },
): Promise<string> {
  const { exitCode, stdout } = await betterExeca(
    'git',
    ['rev-parse', '--symbolic-full-name', '--abbrev-ref', '@{u}'],
    { cwd },
  );
  if (exitCode === 0) {
    return stdout.split('/')[0];
  }
  return '';
}
