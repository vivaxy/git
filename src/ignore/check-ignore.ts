/**
 * @since 2020-01-23 11:14
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function checkIgnore(
  paths: string[],
  { cwd = process.cwd() }: { cwd?: string } = {
    cwd: process.cwd(),
  },
) {
  const { stdout } = await betterExeca('git', ['check-ignore', ...paths], {
    cwd,
  });
  return stdout.split('\n');
}
