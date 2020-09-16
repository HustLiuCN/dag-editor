import { Editor } from './core'

export class Command {
  constructor({ app }: { app: Editor }) {
    this.app = app
    this.task = {}
  }
  app: Editor
  task: { [taskName: string]: Function }
  register(name: string, task: Function) {
    if (this.task[name]) {
      throw Error(`command ${name} exist`)
    }
    this.task[name] = task
  }
  execute(command: string, args?: any) {
    const fn = this.task[command]
    fn && fn.call(this.app, args)
  }
}
