import { Command, flags } from "@oclif/command";

import { generate } from ".";

class EnvSlug extends Command {
  static description =
    "Generate slug for K8S namespace or DB name from git branch";

  static flags = {
    help: flags.help({ char: "h" }),
    version: flags.version({ char: "v" }),
  };

  static args = [{ name: "project-branch", required: true }];

  run(): void {
    const { args } = this.parse(EnvSlug);
    const projectBranch: string = args["project-branch"];
    this.log(generate(projectBranch));
  }
}

export = EnvSlug;
