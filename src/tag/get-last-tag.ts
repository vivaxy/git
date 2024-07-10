/**
 * @since 2019-06-27 10:43
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function getLastTag(
  {
    match = '*',
    from = 'HEAD',
    cwd = process.cwd(),
  }: {
    match?: string;
    from?: string;
    cwd?: string;
  } = {
    match: '*',
    from: 'HEAD',
    cwd: process.cwd(),
  },
): Promise<string> {
  try {
    const { stdout } = await betterExeca(
      'git',
      ['describe', '--match', `"${match}"`, '--abbrev=0', '--tags', from],
      // TODO: why shell needs to be true?
      { cwd, shell: true },
    );
    return stdout;
  } catch (e) {
    return '';
  }
}
