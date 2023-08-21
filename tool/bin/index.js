#!/usr/bin/env node
import arg from "arg"
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
  console.log(chalkStderr.redBright(e.message))
  usage()
}

function usage() {
  console.log(`${chalkStderr.bgMagentaBright(`Tool [CMD]`)}
    ${chalkStderr.greenBright(`--start\tStarts the app`)}
    ${chalkStderr.greenBright(`--build\tBuilds the app`)}
    `)
}
