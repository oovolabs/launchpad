import { spinner, log, select, text } from '@clack/prompts';
import { logger } from "./utils/logger";
import { renderTitle } from './utils/renderTitle';

import fixtureUtils from './utils/fixtureLoader';

const main = async () => {
    const s = spinner();

    // Startup Routine
    await s.start("Starting...");
    await new Promise((resolve) => setTimeout(resolve, 1 * 200));
    await s.stop();

    renderTitle();

    try {
        let fixtures = fixtureUtils.getFixtures();

        if (!fixtures) throw new Error("No fixtures found");

        const selectedFixture = await select({
            message: "Select a fixture to run",
            options: fixtures.map(fixture => {
                return {
                    value: fixture.value,
                    label: fixture.label
                }
            })
        });

        const fixture = fixtures.find(f => f.value === selectedFixture);

        if (!fixture) throw new Error("Invalid fixture selected");

        let eArgs: string = await text({
            message: "Enter extra arguments (if any)",
            placeholder: "e.g. --typescript",
        }) as string;

        if (!eArgs) eArgs = ""; // is undefined if user doesn't enter anything

        await fixture.instance.run(eArgs.split(" "));


    } catch (error) {
        logger.error(`Looks like something went wrong. Here's the error: \n${error}\n`)
        logger.error(`Cleaning up..`);

        process.exit(1);
    }
}

main().catch((err) => {
    logger.error(err);
    process.exit(1);
})