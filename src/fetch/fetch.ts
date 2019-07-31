/**
 * @since 2016-11-27 20:07
 * @author vivaxy
 */
import * as execa from 'execa';
import { Stdio } from '../helpers';

export default async function fetch({
  cwd,
  stdio = 'inherit',
}: {
  cwd: string;
  stdio?: Stdio;
}) {
  return await execa('git', ['fetch', '-p'], {
    stdio,
    cwd,
  });
}
