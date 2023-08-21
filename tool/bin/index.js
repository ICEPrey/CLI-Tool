#!/usr/bin/env node
import arg from "arg"
import { chalkStderr } from "chalk"
import { getConfig } from "../src/commands/config-mgr.js"
import { start } from "../src/commands/start.js"
try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  })
  if (args["--start"]) {
    const config = getConfig()
    start(config)
  }
} catch (e) {
  console.log(chalkStderr.redBright(e.message))
  usage()
}

function usage() {
  console.log(`${chalkStderr.bgMagentaBright(`Tool [CMD]`)}
    ${chalkStderr.greenBright(`--start\tStarts the app`)}
    ${chalkStderr.greenBright(`--build\tBuilds the app`)}
    `)
}
