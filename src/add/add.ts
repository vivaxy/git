/**
 * @since 2019-07-31 14:37
 * @author vivaxy
 */
import { Stdio, betterExeca } from '../helpers';

export default async function add(
  {
    cwd = process.cwd(),
    stdio = 'inherit',
  }: {
    cwd?: string;
    stdio?: Stdio;
  } = {
    cwd: process.cwd(),
    stdio: 'inherit',
  },
): Promise<void> {
  await betterExeca('git', ['add', '.'], { stdio, cwd });
}
