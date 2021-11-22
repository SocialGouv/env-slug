import {Command, flags} from '@oclif/command'

import {generate} from '.'

class EnvSlug extends Command {
  static description = 'Generate slug for K8S namespace or DB name from git branch'

  static flags = {
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'project-branch', required: true, }]

  async run() {
    const {args, flags} = this.parse(EnvSlug)
    this.log(generate(args["project-branch"]))

  }
}

export = EnvSlug
