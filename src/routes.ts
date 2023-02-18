import Router from "@koa/router"
import { UsersController } from "./modules/users/UsersController"

const router = new Router({
  prefix: "/users"
})

const usersController = new UsersController()

router.get("/", async (ctx) => {
  return usersController.getUsers(ctx)
})

router.get("/:id", async (ctx) => {
  return usersController.findUser(ctx)
})

router.post("/", async (ctx) => {
  return usersController.createUser(ctx)
})

export { router }
