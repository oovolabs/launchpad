import { version } from '../../package.json';
import { NpxPath } from './NpxPath';


export const TITLE_TEXT = `   __                        _       ___          _ 
  / /  __ _ _   _ _ __   ___| |__   / _ \\__ _  __| |
 / /  / _\` | | | | '_ \\ / __| '_ \\ / /_)/ _\` |/ _\` |
/ /__| (_| | |_| | | | | (__| | | / ___/ (_| | (_| |
\\____/\\__,_|\\__,_|_| |_|\\___|_| |_\\/    \\__,_|\\__,_|

VERSION: ${version}
FOUND NPX PATHS: ${NpxPath.getNpxPaths().join(', ')};

`;
