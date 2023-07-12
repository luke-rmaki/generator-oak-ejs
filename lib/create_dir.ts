export function create_dir(name: string) {
  try {
    console.log(`📁 Creating project directory: ${name}`);
    Deno.mkdirSync(name);
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log(`📁 Project directory already exists: ${name}`);
    }
  }

  try {
    Deno.mkdirSync(`${name}/views`);
  } catch (_error) {
    //
  }
}
