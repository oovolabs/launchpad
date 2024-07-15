import BaseFixture from '@/fixtures/base';
import fs from 'fs';
import path from 'path';

interface Fixture {
    value: string;
    label: string;
    instance: BaseFixture;
}

/**
 * Fixture loader utility
 * @module utils/fixtureLoader
 * @exports fixtureUtils
 * @description Utility to load fixtures from the fixtures directory
 */
const fixtureUtils = {
    getFixtures: (): Fixture[] | null => {
        const fixturesDir = path.join(__dirname, '../fixtures');

        const files = fs.readdirSync(fixturesDir);

        const fixtureFiles = files.filter(file => (
            file.endsWith('.ts')
        ));

        const fixtures = fixtureFiles.map(file => {
            const filePath = path.join(fixturesDir, file);
            const module = require(filePath);
            if (module.default.prototype instanceof BaseFixture) {
                const fixtureClass = module.default;

                const fixture = new fixtureClass();

                return {
                    value: fixtureClass.NAME,
                    label: fixtureClass.NAME,
                    instance: fixture
                }
            }
            return null;
        }).filter(fixture => fixture !== null);

        return fixtures
    }
};

export default fixtureUtils;
