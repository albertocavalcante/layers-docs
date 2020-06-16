import Listr from 'listr';
import buildApiReference from './api-reference';
import buildReleaseNotes from './release-notes';
import buildSearchIndex from './search-index';
// import buildContributors from './file-contributors';

const tasks = new Listr([
  // buildApiReference,
  // buildContributors,
  // buildReleaseNotes,
  // buildSearchIndex,
],
  // { renderer: 'verbose' }
);

export default tasks;

if (!module.parent) {
  tasks.run().catch(err => {
    console.error(err);
    process.exit(1);
  });
}
