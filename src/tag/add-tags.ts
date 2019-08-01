/**
 * @since 2019-06-28 10:07
 * @author vivaxy
 */
import * as execa from 'execa';
import { Stdio } from '../helpers';

export default async function addTags(
  tags: {
    tag: string;
    message: string;
  }[],
  { cwd, stdio = 'inherit' }: { cwd: string; stdio?: Stdio },
) {
  for (const { tag, message } of tags) {
    await execa('git', ['tag', tag, '-m', message], { stdio, cwd });
  }
}
