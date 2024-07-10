/**
 * @since 2019-08-01 14:34
 * @author vivaxy
 */
import getCurrentRemote from './get-current-remote';
import getRemoteUrl from './get-remote-url';

export default async function getCurrentRemoteUrl(
  {
    cwd = process.cwd(),
  }: {
    cwd?: string;
  } = {
    cwd: process.cwd(),
  },
): Promise<string> {
  const remote = await getCurrentRemote({ cwd });
  if (!remote) {
    return '';
  }
  return getRemoteUrl({ cwd, remote });
}
