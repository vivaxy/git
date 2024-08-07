/**
 * @since 2020-02-05 09:43
 * @author vivaxy
 */
import { expect, test } from 'vitest';
import * as path from 'path';
import getCommits from '../get-commits';

const cwd = path.join(__dirname, '..', '..', '..');

test('should get all commits', async function () {
  const commits = await getCommits({
    from: '95331f83d232342eadf764f53c4938b345a99b36',
    to: '5ea8c7e951f8d31f928e78ece3c028762adcf7b6',
    cwd,
  });
  expect(commits).toMatchSnapshot();
});
