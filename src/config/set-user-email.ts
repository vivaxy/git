/**
 * @since 2020-01-21 07:26
 * @author vivaxy
 */
import { betterExeca } from '../helpers';

export default async function setUserEmail(
  userEmail: string,
  { cwd = process.cwd() }: { cwd?: string } = {
    cwd: process.cwd(),
  },
) {
  await betterExeca('git', ['config', 'user.email', userEmail], { cwd });
}
