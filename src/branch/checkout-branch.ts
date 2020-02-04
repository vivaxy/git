/**
 * @since 2020-02-04 09:39
 * @author vivaxy
 */
import { betterExeca } from '../helpers';
export default async function checkoutBranch({
  cwd,
  branch,
}: {
  cwd: string;
  branch: string;
}) {
  await betterExeca('git', ['checkout', '-b', branch], { cwd });
}
