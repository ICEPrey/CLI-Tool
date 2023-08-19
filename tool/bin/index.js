#!/usr/bin/env node
import * as arg from "arg"
import { chalkStderr } from "chalk"
try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  })
  if (args["--start"]) {
    console.log(chalkStderr.bgCyanBright("starting the app"))
  }
} catch (e) {
  console.log(chalkStderr.yellow(e.message))
  usage()
}

function usage() {
  console.log(`${chalkStderr.bgMagentaBright(`Tool [CMD]`)}
    ${chalkStderr.greenBright(`--start\tStarts the app`)}
    ${chalkStderr.redBright(`--build\tBuilds the app`)}
    `)
}
