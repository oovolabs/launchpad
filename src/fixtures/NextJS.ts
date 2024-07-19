const { spawn } = require('node:child_process');

import { NpxPath } from "../utils/NpxPath";
import { logger } from "../utils/logger";
import BaseFixture from "./base";

/**
 * NextJS Fixture
 * @extends BaseFixture
 */
class NextJS extends BaseFixture {
    public static NAME: string = "NextJS";
    private npxPath: string[];

    constructor() {
        super();
        this.npxPath = NpxPath.getNpxPaths();

        if (!this.npxPath) {
            logger.error("npx not found in PATH. Please ensure it's installed and available in your PATH. How did you even get here?");
            process.exit(1);
        }
    }

    public async run(eArgs: string[]): Promise<void> {
        const args = ['create-next-app', ...eArgs];
        let npxPath = this.npxPath[0]; // @Todo: Either ask the user to choose or try all paths. donno yet

        logger.info(`Running command: ${npxPath} ${args.join(' ')}`);

        const child = spawn(npxPath, args, { stdio: 'inherit' });

        child.on('exit', (code: number) => {
            if (code === 0) {
                logger.info('NextJS project created successfully');
            } else {
                logger.error('NextJS project creation failed');
            }
        });

        child.on('error', (error: Error) => {
            logger.error(`Error creating NextJS project: ${error}`);
        });
        return;
    }
}

export default NextJS;
