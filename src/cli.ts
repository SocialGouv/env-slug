import { Command } from "commander";

import { generate } from ".";

const program = new Command();

program.argument("<projectBranch>").action((projectBranch: string): void => {
  console.log(generate(projectBranch));
});

export function run(): void {
  program.parse(process.argv);
}
