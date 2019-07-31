/**
 * @since 2019-07-03 15:21
 * @author vivaxy
 */
import * as execa from 'execa';

export default async function getTagByRev(
  tag: string,
  { cwd }: { cwd: string },
): Promise<string> {
  try {
    const { exitCode, stdout } = await execa('git', ['rev-parse', tag], {
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
