import { chalkStderr } from "chalk"
import * as pkg from "../../../testProject/package.json" assert { type: "json" }
export function getConfig() {
  if (pkg.default.tool) {
    console.log(
      chalkStderr.greenBright(
        "Found configuration",
        JSON.stringify(pkg.default.tool)
      )
    )
    return pkg.default.tool
  } else {
    console.log(
      chalkStderr.redBright("Could not find configuration; using default")
    )
    return { port: 1234 }
  }
}
