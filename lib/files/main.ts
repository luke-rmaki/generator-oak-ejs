import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
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
    console.log(`🚀 Listening on: http://localhost:${port}`);
  });

  app.listen({ port: port });
}

main();
