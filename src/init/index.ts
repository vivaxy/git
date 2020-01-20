/**
 * @since 2019-06-28 10:13
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export async function init({ cwd }: { cwd: string }) {
  await betterExeca('git', ['init'], {
    cwd,
  });
}
