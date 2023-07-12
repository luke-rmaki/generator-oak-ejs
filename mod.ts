import { generate_files } from "./lib/copy_files.ts";
import { create_dir } from "./lib/create_dir.ts";
import { get_name } from "./lib/get_name.ts";

export async function main() {
  console.log("🚀 Generating new Oak project");

  const name = get_name();

  create_dir(name);

  console.log(import.meta.url);
  const lib_path = Deno.realPathSync(
    new URL("./lib", import.meta.url).pathname
  );
  console.log(lib_path);

  await generate_files(name, lib_path);

  console.log("🦕 Done!");
}

main();
