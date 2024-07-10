/**
 * @since 20190920 16:46
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function getTags(
  {
    match = '*',
    sort = 'refname',
    cwd = process.cwd(),
  }: {
    sort?: string;
    match?: string;
    cwd?: string;
  } = {
    match: '*',
    sort: 'refname',
    cwd: process.cwd(),
  },
): Promise<string[]> {
  try {
    const { stdout } = await betterExeca(
      'git',
      ['tag', '--list', match, `--sort=${sort}`],
      { cwd },
    );
    return stdout.split('\n').filter(Boolean);
  } catch (e) {
    return [];
  }
}
