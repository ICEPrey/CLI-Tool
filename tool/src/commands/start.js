import { chalkStderr } from "chalk"
export function start(config) {
  console.log(chalkStderr.bgCyanBright("Starting the app"))
  console.log(chalkStderr.gray("Received configuration in start -"), config)
}
