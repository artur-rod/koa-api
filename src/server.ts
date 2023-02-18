import Koa from "koa";
import bodyParser from "koa-bodyparser";
import convert from 'koa-convert';
import json from 'koa-json';
import { router } from "./routes";

const app = new Koa()

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response
app.use(bodyParser())
app.use(convert(json()));

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => console.log("Tá voando!"))