import ejs from "npm:ejs";

export async function render(
  name: string,
  values: { [key: string]: unknown } = {}
) {
  const view_path = localStorage.getItem("views");
  const string = await Deno.readTextFile(`${view_path}/${name}.ejs`);
  return ejs.render(string, values);
}
