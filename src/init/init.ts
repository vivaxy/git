/**
 * @since 2020-01-20 07:21
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function init(
  { cwd = process.cwd() }: { cwd?: string } = {
    cwd: process.cwd(),
  },
) {
  await betterExeca('git', ['init'], {
    cwd,
  });
}
