import { generate_files } from "./lib/generate_files.ts";
import { create_dir } from "./lib/create_dir.ts";
import { get_name } from "./lib/get_name.ts";

export async function main() {
  console.log("🚀 Generating new Oak project");

  const name = get_name();
  create_dir(name);

  await generate_files(name);

  console.log("🦕 Done!");
}

main();
