/**
 * @since 2019-06-28 10:13
 * @author vivaxy
 */
import * as execa from 'execa';
import { getCurrentBranch } from '../branch';
import { getCurrentRemote } from '../remote';
import { Stdio } from '../helpers';

export default async function push({
  cwd,
  stdio = 'inherit',
}: {
  cwd: string;
  stdio?: Stdio;
}) {
  const branch = await getCurrentBranch({ cwd });
  if (!branch) {
    throw new Error('Invalid branch');
  }
  const remote = await getCurrentRemote({ cwd });
  if (!remote) {
    throw new Error('Invalid remote');
  }
  // --follow-tags cannot work this a repo within a repo
  await execa('git', ['push', remote, branch, '--follow-tags'], {
    stdio,
    cwd,
  });
}
