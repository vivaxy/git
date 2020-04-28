/**
 * @since 2019-06-28 10:13
 * @author vivaxy
 */
import { getCurrentBranch } from '../branch';
import { getCurrentRemote } from '../remote';
import { Stdio, betterExeca } from '../helpers';

export default async function push({
  setUpstream = false,
  followTags = false,
  cwd,
  stdio = 'inherit',
}: {
  setUpstream: boolean;
  followTags: boolean;
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
  const args = ['push'];
  if (setUpstream) {
    args.push('--set-upstream');
  }
  args.push(remote, branch);
  if (followTags) {
    args.push('--follow-tags');
  }
  await betterExeca('git', args, {
    stdio,
    cwd,
  });
}
