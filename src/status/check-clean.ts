/**
 * @since 2019-07-31 14:42
 * @author vivaxy
 */
import betterExeca from '../helpers/better-execa';

export default async function checkGitClean({
  cwd,
}: {
  cwd: string;
}): Promise<boolean> {
  const { stdout } = await betterExeca('git', ['status', '--porcelain'], {
    cwd,
  });
  return stdout === '';
}
