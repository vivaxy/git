/**
 * @since 2019-08-01 14:02
 * @author vivaxy
 */
import * as execa from 'execa';

export default async function getUserName({
  cwd,
}: {
  cwd: string;
}): Promise<string> {
  const { stdout } = await execa('git', ['config', '--get', 'user.name'], {
    cwd,
  });
  return stdout;
}
