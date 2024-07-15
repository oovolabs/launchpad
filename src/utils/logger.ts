import chalk from "chalk";

export const logger = {
    error(...args: unknown[]) {
        console.error(chalk.red(...args));
    },
    warn(...args: unknown[]) {
        console.warn(chalk.yellow(...args));
    },
    info(...args: unknown[]) {
        console.info(chalk.cyan(...args));
    },
    debug(...args: unknown[]) {
        console.debug(chalk.gray(...args));
    },
    success(...args: unknown[]) {
        console.log(chalk.green(...args));
    }
};