/**
 * @since 2019-06-28 10:17
 * @author vivaxy
 */
import * as execa from 'execa';

export default async function getCurrentRemote({
  cwd,
}: {
  cwd: string;
}): Promise<string> {
  const { exitCode, stdout } = await execa('git', ['remote'], { cwd });
  if (exitCode === 0) {
    return stdout;
  }
  return '';
}
