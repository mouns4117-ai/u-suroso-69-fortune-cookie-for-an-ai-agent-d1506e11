// Fortune Cookie for an AI Agent (u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11).
// Writes one funny fortune slip line for an AI agent to /output/entry.txt.
// Gate: UTF-8 text, 1-140 characters, not only white space, a single line.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be asked to change everything today, and to change nothing at all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
