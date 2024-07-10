/**
 * @since 2019-07-25 16:10
 * @author vivaxy
 */
import { execa } from 'execa';
import { Stdio } from './types';

export default async function betterExeca(
  bin: string,
  commands: string[],
  {
    cwd = process.cwd(),
    shell = false,
    stdio,
  }: { cwd?: string; shell?: boolean; stdio?: Stdio },
): Promise<{
  exitCode: number;
  stdout: string;
}> {
  const childProcess = await execa(bin, commands, {
    cwd,
    reject: false,
    shell,
    stdio,
  });
  if (childProcess.exitCode !== 0) {
    throw new Error(
      `${childProcess.stderr}, command=${bin} ${commands.join(
        ' ',
      )}, cwd=${cwd}, shell=${shell}, stdio=${stdio}`,
    );
  }
  return {
    exitCode: childProcess.exitCode,
    stdout: Array.isArray(childProcess.stdout)
      ? childProcess.stdout.join(', ')
      : childProcess.stdout || '',
  };
}
