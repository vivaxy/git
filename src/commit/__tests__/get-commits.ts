/**
 * @since 2020-02-05 09:43
 * @author vivaxy
 */
import * as path from 'path';
import getCommits from '../get-commits';

const cwd = path.join(__dirname, '..', '..', '..');

test('should get all commits', async function() {
  const commits = await getCommits({
    from: '95331f83d232342eadf764f53c4938b345a99b36',
    to: '5ea8c7e951f8d31f928e78ece3c028762adcf7b6',
    cwd,
  });
  expect(commits).toMatchSnapshot();
});

test('should get commits with paths', async function() {
  const commits = await getCommits({
    cwd,
    paths: ['README.md', 'LICENSE'],
  });
  expect(commits).toMatchSnapshot();
});

test('should get multiple tags', async function() {
  const commits = await getCommits({
    cwd,
    from: '99f0407c99a7bbcd5ad1c194810fe14092e57da3',
    to: 'ebc8de109e22a4546b378bdd90513c686e3a695a',
  });
  expect(commits).toMatchSnapshot();
});
