/**
 * @since 2019-07-03 15:21
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function getTagByRev(
  tag: string,
  { cwd }: { cwd: string },
): Promise<string> {
  try {
    const { exitCode, stdout } = await betterExeca('git', ['rev-parse', tag], {
      cwd,
    });
    if (exitCode === 0) {
      return stdout;
    }
    return '';
  } catch (e) {
    return '';
  }
}
