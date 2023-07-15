import { generate_files } from "./lib/copy_files.ts";
import { create_dir } from "./lib/create_dir.ts";
import { get_name } from "./lib/get_name.ts";

export async function main() {
  console.log("🚀 Generating new Oak project");

  const name = get_name();

  create_dir(name);

  const mod_url = new URL(import.meta.url);

  const lib_url = new URL("./lib", mod_url).href;

  console.log(lib_url);

  await generate_files(name, lib_url);

  console.log("🦕 Done!");
}

main();
