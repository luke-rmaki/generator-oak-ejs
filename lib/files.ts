export const files = [
  {
    name: "main.ts",
    content: `import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
  import { render } from "./lib/render.ts";
  
  function main() {
    const port = 8000;
    const app = new Application();
    const router = new Router();
  
    localStorage.setItem("views", "./views");
  
    router.get("/", async (ctx) => {
      const html = await render("index", { title: "Hello, World!" });
      ctx.response.body = html;
    });
  
    app.use(router.routes());
    app.use(router.allowedMethods());
  
    app.addEventListener("listen", () => {
      console.log(\`🚀 Listening on: http://localhost:$\{port}\`);
    });
  
    app.listen({ port: port });
  }
  
  main();
    `,
  },
  {
    name: "deno.jsonc",
    content: `{
  "tasks": {
    "dev": "deno run --allow-net --allow-read --watch main.ts"
  }
}`,
  },

  {
    name: "lib/render.ts",
    content: `import ejs from "npm:ejs";

export async function render(
  name: string,
  values: { [key: string]: unknown } = {}
) {
  const view_path = localStorage.getItem("views");
  const string = await Deno.readTextFile(\`\${view_path}/\${name}.ejs\`);
  return ejs.render(string, values);

}`,
  },
  {
    name: "views/index.ejs",
    content: `<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1><%= title %></h1>
  </body>
</html>`,
  },
];
