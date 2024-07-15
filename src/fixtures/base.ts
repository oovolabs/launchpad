export default class BaseFixture {

    public static NAME: string = "";

    constructor() {
        if (this.constructor === BaseFixture) {
            throw new Error("BaseFixture is an abstract class and cannot be instantiated directly.");
        }
    }

    /**
     * 
     * @param eArgs Extra arguments to pass to the fixture
     */
    public run(eArgs: string[]): void {
        throw new Error("Method not implemented.");
    }
}