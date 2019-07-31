/**
 * @since 2019-07-31 14:11
 * @author vivaxy
 */
import * as execa from 'execa';

export default async function getCurrentBranch({
  cwd,
}: {
  cwd: string;
}): Promise<string> {
  const { stdout } = await execa('git', ['symbolic-ref', '--short', 'HEAD'], {
    cwd,
  });
  return stdout;
}
