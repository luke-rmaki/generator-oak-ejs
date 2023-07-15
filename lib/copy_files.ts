export async function generate_files(name: string, lib_path: string) {
  console.log("🚀 Generating files");

  for await (const item of Deno.readDir(`${lib_path}/files/`)) {
    if (item.isFile) {
      const contents = await Deno.readTextFile(
        `${lib_path}/files/${item.name}`
      );
      console.log(contents);
    }
    // if (item.isFile) {
    //   await Deno.copyFile(
    //     `${lib_path}/files/${item.name}`,
    //     `./${name}/${item.name}`
    //   );
    // } else if (item.isDirectory) {
    //   try {
    //     await Deno.mkdir(`./${name}/${item.name}`);
    //   } catch (_err) {
    //     //
    //   }
    //   for await (const sub_item of Deno.readDir(
    //     `${lib_path}/files/${item.name}`
    //   )) {
    //     if (sub_item.isFile) {
    //       await Deno.copyFile(
    //         `${lib_path}/files/${item.name}/${sub_item.name}`,
    //         `./${name}/${item.name}/${sub_item.name}`
    //       );
    //     }
    //   }
    // }
  }
}
