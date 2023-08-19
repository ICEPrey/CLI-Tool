#!/usr/bin/env node
const arg = require("arg")
try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  })
  if (args["--start"]) {
    console.log("test")
  }
} catch (e) {
  console.log(e.message)
  usage()
}

function usage() {
  console.log(`Tool [CMD]
    --start\tStarts the app
    --build\tBuilds the app
    `)
}
