
import { spawn } from "child_process";
import { logger } from "@utils/logger";

import BaseFixture from "./base";

class NextJS extends BaseFixture {
    public static NAME: string = "NextJS";

    constructor() {
        super();
    }

    public async run(eArgs: string[]): Promise<void> {
        const command = 'npx';
        const args = ['create-next-app', ...eArgs];

        logger.info(`Running command: ${command} ${args.join(' ')}`);

        const child = spawn(command, args, {
            detached: true,
            stdio: 'ignore'
        });

        child.unref(); // Exit the parent process
    }
}

export default NextJS;
