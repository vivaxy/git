/**
 * @since 2019-06-28 09:59
 * @author vivaxy
 */
import * as execa from 'execa';
import { Stdio } from '../helpers';

export default async function commit(
  message: string,
  { cwd, stdio = 'inherit' }: { cwd: string; stdio?: Stdio },
): Promise<void> {
  await execa('git', ['commit', '-m', message], { stdio, cwd });
}
