import { files } from "./files.ts";
import { ensureDir } from "https://deno.land/std@0.136.0/fs/mod.ts";

export async function generate_files(name: string) {
  console.log("📝 Generating files");
  for (const file of files) {
    const file_path = file.name.split("/");
    const file_name = file_path.pop()!;
    const dir_path = `${name}/${file_path.join("/")}`;

    await ensureDir(dir_path);
    await Deno.writeTextFile(`${dir_path}/${file_name}`, file.content);
  }
}
