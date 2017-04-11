/**
 * @since 2016-11-22 16:04
 * @author vivaxy
 */

import execa from 'execa';

export default (file, args) => {
    return execa(file, args)
        .then(({ code, stdout }) => {
            if (code === 0) {
                return stdout.split(`\n`)[0];
            } else {
                return null;
            }
        });
};
