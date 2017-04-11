/**
 * @since 2016-11-27 14:02
 * @author vivaxy
 */

import getInfoFromShell from './getInfoFromShell';

export default () => {
    return getInfoFromShell('git', ['symbolic-ref', '--short', 'HEAD']);
};
