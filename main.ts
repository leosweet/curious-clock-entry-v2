import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The clock in the hallway stopped at 3:14 on a Tuesday in 1987. Nobody wound it. Nobody took it down. This morning, it ticked once.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
