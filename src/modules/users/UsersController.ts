import { Context } from "koa";
import { UserExistsError } from "./errors/UserExistsError";
import { UserNotExistsError } from "./errors/UserNotExistsError";
import { UsersService } from "./UsersService";

class UsersController {
private usersService: UsersService

  constructor () {
    this.usersService = new UsersService()
  }

  async createUser(ctx: Context) {
    try {
      const { name, age } = ctx.request.body as { name: string, age: number }
      const user = await this.usersService.create(name, age)

      ctx.body = user
      return ctx
    } catch (err) {
      if (err instanceof UserExistsError) {
        ctx.throw(err.statusCode, err.message)
      }
      throw err
    }
  }

  async findUser(ctx: Context) {
    try {
      console.log(ctx.params)
      const { id } = ctx.params
      const user = await this.usersService.getUserById(id as string)

      ctx.body = user
      return ctx
    } catch (err) {
      if (err instanceof UserNotExistsError) {
        ctx.throw(err.statusCode, err.message)
      }
      throw err
    }
  }

  async getUsers(ctx: Context) {
    try {
      const users = await this.usersService.getUsers()
      ctx.body = users
      return ctx
    } catch (err) {
      throw err
    }
  }
}

export { UsersController };
