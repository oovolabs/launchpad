import { execSync, exec } from 'child_process';

export class NpxPath {
  private static _npxPaths: string[] = [];

  // Method to initialize the class and determine the valid npx paths
  static initialize(): void {
    if (this._npxPaths.length === 0) {
      let result: string;
      try {
        if (process.platform === 'win32') {
          result = execSync('where npx', { encoding: 'utf8' }).trim();

          // windows ones must end in .cmd
          result = result.split('\n').map((path: string) => path.trim()).filter((path: string) => path.length > 0).filter(path => path.endsWith('.cmd')).join('\n');
        } else {
          result = execSync('which npx', { encoding: 'utf8' }).trim();
        }

        if (!result) {
          throw new Error('No npx paths found');
        }

        const potentialPaths = result.split('\n').map((path: string) => path.trim()).filter((path: string) => path.length > 0);
        
        this._npxPaths = potentialPaths.filter(path => this.verifyNpxPath(path));
      } catch (error) {
        console.error(`Error determining npx paths: ${(error as Error).message}`);
        this._npxPaths = [];
      }
    }
  }

  // Method to verify if a given path works for npx
  private static verifyNpxPath(path: string): boolean {
    try {
      // Run a simple npx command to verify the path
      execSync(`${path} --version`, { stdio: 'ignore' });
      return true;
    } catch {
      return false;
    }
  }

  // Method to get the valid npx paths
  public static getNpxPaths(): string[] {
    if (this._npxPaths.length === 0) {
      this.initialize();
    }
    return this._npxPaths;
  }
}
