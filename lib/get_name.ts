export function get_name() {
  let name;
  name = prompt("Enter project name: [oak-app]");

  if (!name) {
    name = "oak-app";
  }

  return name;
}
