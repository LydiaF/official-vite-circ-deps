import { inspectRecursively } from "."

export const handleObject = (node) => {
  console.log(JSON.stringify(node, null, 2))

  for (const [key] of Object.entries(node)) {
    inspectRecursively(node[key]);
  }
}
