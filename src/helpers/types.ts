/**
 * @since 2019-07-31 14:44
 * @author vivaxy
 */
import { Options } from 'execa';

export type Stdio = Options['stdio'];

export interface FileStatus {
  filename: string;
  diffType: 'A' | 'C' | 'D' | 'M' | 'R' | 'T' | 'U' | 'X' | 'B';
}
